import { useUser } from "../../context/UserContext";
import { NavLink } from 'react-router-dom'
import Container from "@mui/material/Container";

const Header = () => {
  const { user } = useUser();


  const UserName = () => {
    return <p>Logged in as {user.username}</p>
  }

  return (
    <Container maxWidth="sm">

      <h1>Food-app</h1>
        <nav>
          <li><NavLink to="profile">Browse Foods </NavLink></li>
          <li><NavLink to="food">Add Food</NavLink></li>
        </nav>
      {user && <UserName/>}
    </Container>
  );
};

export default Header;
