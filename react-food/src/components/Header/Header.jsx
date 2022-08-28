import { useUser } from "../../context/UserContext";
import { NavLink } from 'react-router-dom'
import Container from "@mui/material/Container";
import { useMessage } from "../../context/MessageContext";
import Notification from "../Utility/Notification";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user,setUser } = useUser();
  const navigate = useNavigate()
  const {message} = useMessage()
  const UserName = () => {
    return <p>Logged in as {user.username}</p>
  }
  const handleLogout = (event) => {
    event.preventDefault()
    setUser(null)
    navigate('')
  }
  const LogoutBtn = () => {
    return <Button variant="contained" color="error" onClick={handleLogout}>Log out</Button>
  }

  return (

    <header className="bg-blue-300 inline-flex w-full p-8 sticky top-0 z-50 text-white">

      <h1 className="font-bold m-4 text-6xl ">Foodelligent</h1>
      <section className="fixed top-10 right-96">
      {user && <UserName/>}
      {user && <LogoutBtn/>}
      </section>
    </header>
  );
};

export default Header;
