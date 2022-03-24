import "../LoginSignup.css";
import { Grid } from "@mui/material";
import illustration1 from "../../../Assets/loginSignup.svg";
import Signup from '../../../auth/Relative/Signup';
;
export default function SignupPage() {
  return (
    <>
      <Grid container direction="row">
        <Grid item sm={6} md={3} className="right-box">
        
          <Grid
            item
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginTop="80px"
          >
            <img src={illustration1} alt="login" className="illustration" />
          </Grid>
          
        </Grid>
        <Grid item sm={6} md={6} className="left-box">
          <Grid item xs={12} sm={6} className="links">
            {/* <HeaderLogin activePage="Login" /> */}
          </Grid>
         
          <div className="box">
            <Signup/>
          </div>
        </Grid>
      </Grid>
    </>
  );
}