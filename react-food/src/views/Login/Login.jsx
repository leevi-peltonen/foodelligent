import { useUser } from "../../context/UserContext"
import LoginForm from "../../components/Login/LoginForm"
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react"
import Container from "@mui/material/Container"
import RegisterForm from "../../components/Login/RegisterForm"
import { Button } from "@mui/material"

const Login = () => {
  const navigate = useNavigate()
  const {user} = useUser()

  const [onRegister, setOnRegister] = useState(false)


  const displayRegister = () => {
    setOnRegister(prev => !prev)
  }

 /* useEffect(() => {
    if (user !== null) {
      navigate('Food')
    }
  }, [ user, navigate ])
*/


  return (
    <Container maxWidth="sm">
      {!onRegister ? <LoginForm /> : <RegisterForm  signUpAction={displayRegister} />}
      {!onRegister && <Button onClick={displayRegister}>Don't have an account? Sign up.</Button>}
    </Container>
  )
}

export default Login