import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      style={{
        paddingTop: "100px",
        backgroundColor: "#FF8E00",
        height: "86vh",
      }}
    >
      <center>
        <div style={{ transform: "translateY(-44px)" }}>
          <img
            width="390"
            src="https://i.pinimg.com/originals/99/40/a5/9940a5a30d960f42361482ff22ecf17f.gif"
            alt="space"
          ></img>
          <h1 style={{ fontWeight: 800, color: "#003F7D" }}>Oh no 404!</h1>
          <br />
          <h2 style={{ color: "#003F7D" }}>Something went wrong</h2>
          <br />
          <Link style={{ textDecoration: "none" }} to="/">
            <Button
              size="small"
              variant="contained"
              style={{ backgroundColor: "#FF5003", padding:"15px", color:"#002347", fontWeight:"bold", fontSize:"1rem" }}
            >
              Try Again!
            </Button>
          </Link>
        </div>
      </center>
    </div>
  );
};

export default NotFound;
