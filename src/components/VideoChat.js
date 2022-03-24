import { Grid, Typography, Button } from "@mui/material";
import videochat from "../Assets/videochat.png";
import "./VideoChat.css";
import { AiOutlineTeam } from "react-icons/ai";
import { FiType } from "react-icons/fi";

export default function VideoChat() {
  return (
    <>
      <Grid container direction="row">
        <Grid item sm={6} md={3} className="right-box">
          <Grid
            item
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginTop="100px"
          >
            <img src={videochat} alt="login" className="illustration" />
          </Grid>
        </Grid>
        <Grid item sm={6} md={6} className="left-box">
          <Grid item xs={12} sm={6} className="links">
            {/* <HeaderLogin activePage="Login" /> */}
          </Grid>
          <div className="box">
            <Typography style={{ fontSize: "32px" }} textAlign="center">
              Video Chat Feature to Lessen the Gap between Your Loved Ones
            </Typography>

            <ul style={{ paddingTop: "10px", fontSize: "1.2rem" }}>
              <Typography variant="h5">
                <AiOutlineTeam fontSize={28} style={{ marginRight: "20px" }} />
                Enter team name as Nekoma
              </Typography>
              <Typography variant="h5">
                <FiType fontSize={28} style={{ marginRight: "20px" }} />
                Enter your Username
              </Typography>
            </ul>
            <a
              href="https://shrutiprasad.pythonanywhere.com/"
              rel="noreferrer"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="contained"
                style={{
                  
                  backgroundColor: "#019267",
                  marginTop: "15px",
                }}
              >
                Start Video Chat
              </Button>
            </a>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
