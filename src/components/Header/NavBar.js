import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
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
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import "./Header.css";
import logo from "../../assets/logo.gif";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const NavBar = (activePage) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [login, setLogin] = React.useState("");
  const [signup] = React.useState("");

  const handleChange = (event) => {
    setLogin(event.target.value);
  };
  const settings = ["Logout"];
  let value = {
    home: false,
    events: false,
    Committee: false,
    contactUS: false,
  };
  let page = activePage.activePage.activePage;
  if (page === "Home") value.home = true;
  else if (page === "Donate") value.donate = true;

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
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
        <Link className="headerLinks" to={`/`}>
          <ListItem button key="home">
            <ListItemIcon>
              <HiOutlineArrowNarrowRight className="headerLinks" />
            </ListItemIcon>
            <ListItemText>
              <span className="headerLinks">Home</span>
            </ListItemText>
          </ListItem>
        </Link>
        {["Donate"].map((text) => (
          <Link
            className="headerLinks"
            target="-blank"
            to="https://pages.razorpay.com/pl_Iv8oF3Tp3y1zGB/view"
          >
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
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Login</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={login}
            label="Login"
            onChange={handleChange}
            style={{fontWeight:"bold"}}
          >
            <Link to="/loginforadmin">
              <MenuItem value={10}>Admin</MenuItem>
            </Link>
            <Link to="/loginforrelative">
              <MenuItem value={20}>Relative</MenuItem>
            </Link>
          </Select>
        </FormControl>
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
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <Link to="/">
              {" "}
              <img width="50px" src={logo} alt="acmIcon" />{" "}
            </Link>
          </Typography>

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
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <img width="89" src={logo} alt="acmIcon" />
          </Typography>
          <Box
            sx={{ flexGrow: 2, display: { xs: "none", md: "flex" } }}
            style={{ justifyContent: "center", paddingRight:"200px",zIndex:"-1.5rem" }}
          >
            <span className="navLinks" style={{ whiteSpace:"nowrap", display:"flex", flexDirection:"row" }}>
              <Link disabled={value.home}  to="/">
                <button disabled={value.home} className="btn">
                  Home
                </button>
              </Link>
              <a
                href="https://pages.razorpay.com/pl_Iv8oF3Tp3y1zGB/view"
                rel="noreferrer"
                target="_blank"
              >
                <button className="btn">Donate</button>
              </a>
              <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth variant="filled">
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
              <FormControl fullWidth variant="filled">
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

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
