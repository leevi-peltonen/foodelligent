import { createRef, useState } from "react"


const LoginForm = () => {
  const input = createRef()
  const handleSubmit = (event) => {
    event.preventDefault()
  }


  return(
    <form onSubmit={handleSubmit}>
      <input  ref={input}type="text" placeholder="Username"></input>
      <button type="submit">Log in</button>
    </form>
  )
}

export default LoginForm