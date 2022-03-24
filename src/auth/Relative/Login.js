import { useState } from "react";
import {
  FilledInput,
  Grid,
  InputAdornment,
  InputLabel,
  Container,
  Box,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import { MdEmail, MdVisibility, MdVisibilityOff } from "react-icons/md";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

export default function Login() {
  const [setLoading] = useState(true);

  const [values, setValues] = useState({
    password: "",
    email: "",
    code: "",
    showPassword: false,
  });

  const handle = () => {
    localStorage.setItem("id", values.code);
  };

  const [showCode, setshowCode] = useState(false);
  const handleClickShowCode = () => {
    setshowCode(!showCode);
  };
  const handleChanges = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    console.log(values);
    localStorage.setItem("user", JSON.stringify(values.email));
  };
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleShowPassword = () => {
    console.log(setValues);
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    createacc();
  };

  const history = useNavigate();

  async function createacc() {
    console.log("hello");
    try {
      let result = await fetch(
        "http://hackathonwork.pythonanywhere.com/auth/login/",
        {
          method: "POST",
          body: JSON.stringify({
            email: values.email,
            password: values.password,
          }),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      result = await result.json();
      console.log(result);
      if (result.tokens) {
        history("/relative");
      }
    } catch (error) {
      console.log("Error" + error);
      alert("Please enter valid credentials");
      setLoading(false);
    }
  }

  return (
    <>
      <Container
        data-aos="fade-up"
        //  style={{paddingTop:"100px"}}
        maxWidth="xs"
      >
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <InputLabel htmlFor="email">Email</InputLabel>
              <FilledInput
                id="email"
                label="Email"
                autoFocus
                required
                type="email"
                name="email"
                variant="outlined"
                color="primary"
                autoComplete="email"
                value={values.email}
                fullWidth
                endAdornment={
                  <InputAdornment position="end">
                    <MdEmail />
                  </InputAdornment>
                }
                onChange={handleChanges}
              />
            </Grid>
            <Grid spacing={3} item xs={12}>
              <InputLabel htmlFor="password">Password</InputLabel>
              <FilledInput
                id="password"
                label="password"
                color="primary"
                required
                type={values.showPassword ? "text" : "password"}
                name="password"
                variant="outlined"
                value={values.password}
                fullWidth
                autoComplete="current-password"
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleShowPassword}
                      edge="end"
                    >
                      {values.showPassword ? (
                        <MdVisibilityOff />
                      ) : (
                        <MdVisibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </Grid>
            <Grid spacing={3} item xs={12}>
              <InputLabel htmlFor="code">Patient's Code</InputLabel>
              <FilledInput
                id="code"
                label="name"
                color="primary"
                required
                type="text"
                name="number"
                variant="outlined"
                value={values.code}
                fullWidth
                autoComplete="current-code"
                onChange={handleChange("code")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle code visibility"
                      onClick={handleClickShowCode}
                      edge="end"
                    >
                      {showCode ? <MdVisibilityOff /> : <MdVisibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={handle}
              sx={{ ml: 2, mt: 2, mb: 1 }}
              style={{
                backgroundColor: "#019267",
                color: "black",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              Login
            </Button>
            <Typography marginLeft="40px" variant="h5" textAlign="center">
              Don't have an Account?{" "}
              <Link style={{ textDecoration: "none" }} to="/relative/signup">
                Signup
              </Link>
            </Typography>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
