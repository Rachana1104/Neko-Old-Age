import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Menu from "@mui/material/Menu";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import "./Header.css";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const NavBarLogin = (activePage) => {
  const [login, setLogin] = React.useState("");
  const [signup] = React.useState("");
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  let value = {
    login: false,
    signup: false,
  };
  let page = activePage.activePage.activePage;
  if (page === "Login") value.login = true;
  else if (page === "Signup") value.signup = true;

  const handleChange = (event) => {
    setLogin(event.target.value);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const anchor = "left";
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{ backgroundColor: "white", height: "100%" }}
    >
      <List>
        {["Login", "SignUp"].map((text) => (
          <Link className="headerLinks" to={`/${text.toLowerCase()}`}>
            <ListItem button key={text}>
              <ListItemIcon>
                <HiOutlineArrowNarrowRight className="headerLinks" />
              </ListItemIcon>
              <ListItemText>
                <span className="headerLinks">{text}</span>
              </ListItemText>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      style={{ background: "transparent", boxShadow: "none" }}
      position="sticky"
    >
      <Container maxWidth="l">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <React.Fragment key={anchor}>
              <Button
                style={{ fontSize: "2rem" }}
                size="large"
                color="inherit"
                onClick={toggleDrawer(anchor, true)}
              >
                <GiHamburgerMenu style={{ color: "green" }} />
              </Button>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            ></Menu>
          </Box>
          <Box
            sx={{ flexGrow: 2, display: { xs: "none", md: "flex" } }}
            style={{ justifyContent: "center" }}
          >
            <span className="navLinks" style={{ whiteSpace:"nowrap", display:"flex", flexDirection:"row" }}>
              <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" style={{fontWeight:"700", color:"black", fontSize:"1.2rem"}}>LOGIN</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={login}
                  label="Login"
                  onChange={handleChange}
                  style={{ backgroundColor:"#ffc619" }}
                >
                  <Link to="/loginforadmin" style={{ textDecoration: "none" }}>
                    <MenuItem value={10} style={{color:"black"}}>Admin</MenuItem>
                  </Link>
                  <Link
                    to="/loginforrelative"
                    style={{ textDecoration: "none" }}
                  >
                    <MenuItem value={20} style={{color:"black"}}>Relative</MenuItem>
                  </Link>
                </Select>
              </FormControl>
              {/* </Box>
              <Box sx={{ minWidth: 120 }}> */}
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" style={{fontWeight:"700", color:"black", fontSize:"1.2rem"}}>SIGNUP</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={signup}
                  label="Signup"
                  onChange={handleChange}
                  style={{ backgroundColor:"#ffc619" }}
                >
                  <Link to="/signupforadmin" style={{ textDecoration: "none" }}>
                    <MenuItem value={10} style={{color:"black"}}>Admin</MenuItem>
                  </Link>
                  <Link
                    to="/signupforrelative"
                    style={{ textDecoration: "none" }}
                  >
                    <MenuItem value={20} style={{color:"black"}}>Relative</MenuItem>
                  </Link>
                </Select>
              </FormControl>
              </Box>
            </span>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBarLogin;
