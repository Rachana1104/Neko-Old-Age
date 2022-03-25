import React from "react";
import HeaderAdmin from "./HeaderAdmin";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import {
  // CardActionArea,
  Box,
} from "@mui/material";

const Enrolled = () => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    (async () => {
      let patientName;
      try {
        let response = await fetch(
          "http://hackathonwork.pythonanywhere.com/updates/list",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        patientName = await response.json();
        console.log(patientName);
      } catch (error) {
        console.log("Error" + error);
        patientName = [];
      }

      setCard(patientName.data);
    })();
  }, []);

  return (
    <div>
      <HeaderAdmin activePage="Enrolled" />

      <Box ml={5} mr={5} pl={7} pr={3} mt={3} pt={3} mb={1} pb={1}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {card.map((card, _) => {
            return (
              <Grid item xs={12} sm={6} md={6} lg={3} key={card.id}>
                    <Card
                      variant="outlined"
                      sx={{ maxWidth: 345 }}
                      className="enrolledCard"
                    >
                      <CardContent>
                        <Typography variant="h6" align="center" className="enrolledName">
                          <span style={{color:"black"}}>Patient Name: </span> {card.name}
                        </Typography>
                        <Typography variant="h6" align="center" className="enrolledName">
                        <span style={{color:"black"}}>Relative Name: </span>{card.relatives}
                        </Typography>
                        <Typography variant="h6" align="center" className="enrolledName">
                        <span style={{color:"black"}}>Patient Code: </span>{card.id}
                        </Typography>
                      </CardContent>
                    </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};

export default Enrolled;
