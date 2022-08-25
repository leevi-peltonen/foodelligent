import { useUser } from "../../context/UserContext";
import { NavLink } from 'react-router-dom'
const Header = () => {
  const { user } = useUser();

  return (
    <>
      <h1>Food-app</h1>
        <nav>
          <li><NavLink to="profile">Profile</NavLink></li>
          <li><NavLink to="food">Food</NavLink></li>
        </nav>
      <p>Logged in as {user.username}</p>
    </>
  );
};

export default Header;
