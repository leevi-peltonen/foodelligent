const recipesRouter = require('express').Router()
const Recipe = require('../models/recipe')
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const { timeRateIndexCalculator } = require('../utils/helpers')

// Get all recipes
recipesRouter.get('/', async (req, res) => {
    const recipes = await Recipe
        .find({}).populate('user', { username: 1 })
    res.json(recipes.map(recipe => recipe.toJSON()))
})

// Get recipe by ID
recipesRouter.get('/:id', async (req, res) => {
    const recipe = await Recipe.findById(req.params.id)
    if (recipe) {
        res.json(recipe.toJSON())
    } else {
        res.status(404).end()
    }
})

const getTokenFrom = req => {
    const authorization = req.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        return authorization.substring(7)
    }
    return null
}

// Add new recipe
recipesRouter.post('/', async (req, res) => {
    const body = req.body
    const token = getTokenFrom(req)
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
        return res.status(401).json({ error: 'token missing or invalid' })
    }
    const user = await User.findById(decodedToken.id)

    const recipe = new Recipe({
        title: body.title,
        ingredients: body.ingredients,
        steps: body.steps,
        rating: body.rating,
        time: body.time,
        timeRateIndex: timeRateIndexCalculator(body.time, body.rating)
    })

    const savedRecipe = await recipe.save()
    user.recipes = user.recipes.concat(savedRecipe._id)
    await user.save()
    res.json(savedRecipe.toJSON())
})

module.exports = recipesRouter