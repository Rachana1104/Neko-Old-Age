import * as React from "react";
import NavBar from "../../components/Header/NavBar";
import { Grid, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import "./HomePage.css";
// import "../../components/Header/Header.css";

export default function HomePage() {
  const [login, setLogin] = React.useState("");
  const [signup] = React.useState("");

  const handleChange = (event) => {
    setLogin(event.target.value);
  };

  return (
    <>
      <NavBar activePage="Home" />
      <Grid
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
        direction="row"
      >
        <Grid item sm={6} md={4} className="leftBox">
          <div className="text" >
            <Grid item sm={6} md={12}>
              <Typography
                style={{
                  fontSize: "3.5rem",
                  letterSpacing: 1,
                  fontFamily: "Roboto",
                }}
              >
                Neko Old Age Home
              </Typography>
            </Grid>
            <br />
            <Grid item sm={6} md={12}>
              <Typography style={{ fontFamily: "Roboto", fontSize: "1.5rem",paddingBottom:"20px" }}>
                Making Millions Smile 😊
              </Typography>
            </Grid>
            <br />
          </div>
          <Box sx={{ minWidth: 100 }}>
            {/* <Grid md={6}> */}
            <FormControl style={{width:"25%", paddingRight:"120px"}} variant="filled">
              <InputLabel
                id="demo-simple-select-label"
                style={{
                  fontWeight: "700",
                  color: "black",
                  fontSize: "1.2rem",
                }}
              >
                LOGIN
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={login}
                label="Login"
                onChange={handleChange}
                style={{ backgroundColor: "#ffc619" }}
              >
                <Link to="/admin/login" style={{ textDecoration: "none" }}>
                  <MenuItem value={10} style={{ color: "black" }}>
                    Admin
                  </MenuItem>
                </Link>
                <Link to="/relative/login" style={{ textDecoration: "none" }}>
                  <MenuItem value={20} style={{ color: "black" }}>
                    Relative
                  </MenuItem>
                </Link>
              </Select>
            </FormControl>
            
            <FormControl style={{width:"25%"}} variant="filled">
              <InputLabel
                id="demo-simple-select-label"
                style={{
                  fontWeight: "700",
                  color: "black",
                  fontSize: "1.2rem",
                }}
              >
                SIGNUP
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={signup}
                label="Signup"
                onChange={handleChange}
                style={{ backgroundColor: "#ffc619" }}
              >
                <Link to="/admin/signup" style={{ textDecoration: "none" }}>
                  <MenuItem value={10} style={{ color: "black" }}>
                    Admin
                  </MenuItem>
                </Link>
                <Link
                  to="/relative/signup"
                  style={{ textDecoration: "none" }}
                >
                  <MenuItem value={20} style={{ color: "black" }}>
                    Relative
                  </MenuItem>
                </Link>
              </Select>
            </FormControl>
            {/* </Grid> */}
          </Box>
        </Grid>
        <Grid item sm={6} md={6} className="rightBox"></Grid>
      </Grid>
    </>
  );
}
