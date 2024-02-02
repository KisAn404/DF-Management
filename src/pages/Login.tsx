import Link from "next/link";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import PersonIcon from "@mui/icons-material/Person";
import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LockIcon from "@mui/icons-material/Lock";
const Home = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <div className=" h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-10 pt-10   ">
      <div className=" grid grid-cols-12  ">
        <div className=" col-span-6 ">
          <div className="">
            <div className=" flex">
              <PersonIcon className=" my-3 mx-5" />
              <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
              />
            </div>
            <div>
              <div className=" my-2">
                <LockIcon className=" my-3 mx-5" />

                <FormControl sx={{ m: 0, width: "25ch" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-span-6">
          <div>
            <p className=" text-center">javier</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
