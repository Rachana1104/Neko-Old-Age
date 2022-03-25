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

const NavAdmin = (activePage) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  let value = {
    create: false,
    view: false,
    enrolled: false,
    verify: false,
  };
  let page = activePage.activePage.activePage;
  if (page === "Create") value.create = true;
  else if (page === "View") value.view = true;
  else if (page === "Enrolled") value.enrolled = true;
  else if (page === "Videochat") value.videochat = true;
  else if (page === "Chat") value.adminchat = true;
  else if (page === "Logout") value.adminlogout = true;
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
        {["Create", "View", "Enrolled", "VideoChat","AdminChat"].map((text,index) => (
          <Link className="headerLinks" to={`/${text.toLowerCase()}`} key={index}>
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
            <span className="navLinks">
              <Link disabled={value.create} className="headerLinks" to="/create">
                <button disabled={value.create} className="btn">
                  Create
                </button>
              </Link>
              <Link
                disabled={value.view}
                className="headerLinks"
                to="/view"
              >
                <button disabled={value.view} className="btn">
                  View
                </button>
              </Link>
              <Link
                disabled={value.enrolled}
                className="headerLinks"
                to="/enrolled"
              >
                <button disabled={value.enrolled} className="btn">
                  Enrolled
                </button>
              </Link>
              <Link
                disabled={value.enrolled}
                className="headerLinks"
                to="/videochat"
              >
                <button disabled={value.videochat} className="btn">
                  VideoChat
                </button>
              </Link>
              <Link
                disabled={value.enrolled}
                className="headerLinks"
                to="/admin/chat"
              >
                <button disabled={value.adminchat} className="btn">
                  Chat
                </button>
              </Link>
              <Link
                disabled={value.enrolled}
                className="headerLinks"
                to="/"
              >
                <button disabled={value.adminlogout} className="btn">
                  Logout
                </button>
              </Link>
            </span>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavAdmin;
