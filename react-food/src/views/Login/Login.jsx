import { useUser } from "../../context/UserContext"
import LoginForm from "../../components/Login/LoginForm"
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react"




const Login = () => {
  const navigate = useNavigate()
  const {user} = useUser()

  useEffect(() => {
    if (user !== null) {
      navigate('Food')
    }
  }, [ user, navigate ])



  return (
    <>
      <LoginForm />
    </>
  )
}

export default Login