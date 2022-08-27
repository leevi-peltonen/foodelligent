import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { TextField } from "@mui/material";
import { useUser } from "../../context/UserContext";
import { login } from "../../services/login";
import { useNavigate } from "react-router-dom";
import { storageSave } from "../../utils/storage";
import {Button} from "@mui/material";
const LoginForm = () => {
  const { setUser } = useUser();
  const navigate = useNavigate();



  const handleSubmit = async (event) => {
    event.preventDefault();
      const user = await login({ username: values.username, password: values.password })
      setUser(user)
      navigate('recipes')
  };




  const [values, setValues] = useState({
    username: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
        <FormControl>
        <InputLabel htmlFor="outlined-adornment-username">Username</InputLabel>
        <OutlinedInput
          id="outlined-adornment-username"
          value={values.username}
          onChange={handleChange("username")}
          type="text"
        ></OutlinedInput>
        </FormControl>
        
        <FormControl>
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
        </FormControl>
        <Button variant="contained" type="submit">Log in</Button>
      </FormControl>
      
    </form>
  );
};

export default LoginForm;
