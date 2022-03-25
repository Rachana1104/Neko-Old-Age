import { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import green from "../../Assets/green.png";
import { BiFoodMenu } from "react-icons/bi";
import {GiHealthNormal, GiMedicines} from 'react-icons/gi';
import {AiFillSchedule} from 'react-icons/ai';
import {FaAllergies, FaBirthdayCake} from 'react-icons/fa';
import {ImListNumbered} from 'react-icons/im';
import {BsFillPeopleFill} from 'react-icons/bs';
import HeaderRelative from "./HeaderRelative";

export default function Relative() {
  const [card, setCard] = useState([]);

  const patient = localStorage.getItem("id");
  console.log(patient);

  useEffect(() => {
    (async () => {
      let patientData;
      try {
        let response = await fetch(
          `http://hackathonwork.pythonanywhere.com/updates/retrieve/${patient}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        patientData = await response.json();
        // console.log(itemData);
      } catch (error) {
        console.log("Error" + error);
        patientData = [];
      }
      setCard(patientData.data);
    })();
  }, [patient]);

  return (
    <>
    <HeaderRelative activePage="Relative" />
      <div>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          style={{ marginTop: "80px", marginLeft: "80px" }}
        >
          <Typography variant="h2">
         {card.name}
          </Typography>
        </Grid>

        <Grid container direction="row">
          <Grid item sm={6} md={3} className="image-box">
            <Grid
              item
              display="flex"
              justifyContent="center"
              alignItems="center"
              marginTop="50px"
            >
              <img src={card.photo} alt="img" width="200px" height="200px" />
            </Grid>
          </Grid>

          <Grid item sm={6} md={6} className="cards-box">
            <div className="cards">
              <Grid
                container
                spacing={3}
                alignItems="flex-start"
                justifyContent="flex-start"
                marginTop="30px"
              >
                <Grid item xs={12} sm={12} md={12} lg={12}>


                  <Card sx={{ display: "flex", marginBottom:"20px"}}>
                    <CardMedia
                      component="img"
                      sx={{ width: 100 }}
                      image={green}
                      alt="green"
                    />
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <CardContent sx={{ flex: "1 0 auto" }} style={{paddingLeft:"75px"}}>
                        <Typography variant="h4">Health Status</Typography>
                        <Typography variant="h5">{card.healthstatus}</Typography>
                      </CardContent>
                    </Box>
                    <div style={{marginTop:"20px", marginRight:"20px"}}>
                    <GiHealthNormal size={60} style={{paddingLeft:"270px"}}/>
                    </div>
                  </Card>

                  <Card sx={{ display: "flex", marginBottom:"20px" }}>
                    <CardMedia
                      component="img"
                      sx={{ width: 100 }}
                      image={green}
                      alt="green"
                    />
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <CardContent sx={{ flex: "1 0 auto" }} style={{paddingLeft:"70px"}}>
                        <Typography variant="h4">Food</Typography>
                        <Typography variant="h5">{card.food}</Typography>
                      </CardContent>
                    </Box>
                    <div style={{marginTop:"20px", marginRight:"20px"}}>
                    <BiFoodMenu size={60} style={{paddingLeft:"410px"}}/>
                    </div>
                  </Card>

                  <Card sx={{ display: "flex", marginBottom:"20px" }}>
                    <CardMedia
                      component="img"
                      sx={{ width: 100 }}
                      image={green}
                      alt="green"
                    />
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <CardContent sx={{ flex: "1 0 auto" }} style={{paddingLeft:"70px"}}>
                        <Typography variant="h4">Medicines</Typography>
                        <Typography variant="h5">{card.medicine}</Typography>
                      </CardContent>
                    </Box>
                    <div style={{marginTop:"20px", marginRight:"20px"}}>
                    <GiMedicines size={60} style={{paddingLeft:"320px"}}/>
                    </div>
                  </Card>

                  <Card sx={{ display: "flex", marginBottom:"20px" }}>
                    <CardMedia
                      component="img"
                      sx={{ width: 100 }}
                      image={green}
                      alt="green"
                    />
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <CardContent sx={{ flex: "1 0 auto" }} style={{paddingLeft:"70px"}}>
                        <Typography variant="h4">Appointment</Typography>
                        <Typography variant="h5">{card.appointment}</Typography>
                      </CardContent>
                    </Box>
                    <div style={{marginTop:"20px", marginRight:"20px"}}>
                    <AiFillSchedule size={60} style={{paddingLeft:"290px"}}/>
                    </div>
                  </Card>

                  <Card sx={{ display: "flex", marginBottom:"20px" }}>
                    <CardMedia
                      component="img"
                      sx={{ width: 100 }}
                      image={green}
                      alt="green"
                    />
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <CardContent sx={{ flex: "1 0 auto" }} style={{paddingLeft:"70px"}}>
                        <Typography variant="h4">Allergies</Typography>
                        <Typography variant="h5">{card.allergies}</Typography>
                      </CardContent>
                    </Box>
                    <div style={{marginTop:"20px", marginRight:"20px"}}>
                    <FaAllergies size={60} style={{paddingLeft:"340px"}}/>
                    </div>
                  </Card>

                  <Card sx={{ display: "flex", marginBottom:"20px" }}>
                    <CardMedia
                      component="img"
                      sx={{ width: 100 }}
                      image={green}
                      alt="green"
                    />
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <CardContent sx={{ flex: "1 0 auto" }} style={{paddingLeft:"180px"}}>
                        <Typography variant="h4">Alloted Room Number</Typography>
                        <Typography variant="h5">{card.roomno}</Typography>
                      </CardContent>
                    </Box>
                    <div style={{marginTop:"20px", marginRight:"20px"}}>
                    <ImListNumbered size={60} style={{paddingLeft:"270px"}}/>
                    </div>
                  </Card>
                  

                  <Card sx={{ display: "flex", marginBottom:"20px" }}>
                    <CardMedia
                      component="img"
                      sx={{ width: 100 }}
                      image={green}
                      alt="green"
                    />
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <CardContent sx={{ flex: "1 0 auto" }} style={{paddingLeft:"90px"}}>
                        <Typography variant="h4">Registered Relatives</Typography>
                        <Typography variant="h5">{card.relatives}</Typography>
                      </CardContent>
                    </Box>
                    <div style={{marginTop:"20px", marginRight:"20px"}}>
                    <BsFillPeopleFill size={60} style={{paddingLeft:"170px"}}/>
                    </div>
                  </Card>

                  <Card sx={{ display: "flex", marginBottom:"20px" }}>
                    <CardMedia
                      component="img"
                      sx={{ width: 100 }}
                      image={green}
                      alt="green"
                    />
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <CardContent sx={{ flex: "1 0 auto" }} style={{paddingLeft:"70px"}}>
                        <Typography variant="h4">Date of Birth</Typography>
                        <Typography variant="h5">{card.dob}</Typography>
                      </CardContent>
                    </Box>
                    <div style={{marginTop:"20px", marginRight:"20px"}}>
                    <FaBirthdayCake size={60} style={{paddingLeft:"270px"}}/>
                    </div>
                  </Card>


                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
