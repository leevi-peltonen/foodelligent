const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title: String,
    ingredients: [String],
    steps: [String],
    rating: Number,
    time: Number,
    timeRateIndex: Number
});

module.exports = mongoose.model('Recipe', recipeSchema);