import NavBar from "../../components/Header/NavBar"
import { Grid, Typography } from "@mui/material";
import "./HomePage.css";

export default function HomePage() {
  return (
    <>
      <NavBar activePage="Home"/>
      <Grid
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
        direction="row"
      >
        <Grid item sm={6} md={3} className="leftBox">
          <div className="text">
            <Grid item sm={6} md={3}>
              <Typography style={{ fontSize: "3.5rem", letterSpacing: 1, fontFamily:"Roboto" }}>Neko Old Age Home</Typography>
            </Grid>
            <br />
            <Grid item sm={6} md={3}>
              <Typography style={{ fontFamily:"Roboto", fontSize: "1.5rem" }}>Making Millions Smile 😊</Typography>
            </Grid>
            <br />
          </div>
        </Grid>
        <Grid item sm={6} md={6} className="rightBox"></Grid>
      </Grid>
    </>
  );
}
