import { useUser } from "../../context/UserContext"

const DisplayFoods = () => {
  const {user} = useUser()

  return (
    <div className="container-foods">
      {user.foods.map((item, index) => {
        return <div key={index}>{item.name}</div>
      })}
    </div>
  )
}

export default DisplayFoods