import React from "react";
import HeaderAdmin from "./HeaderAdmin";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import { useState, useEffect } from "react";

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

      <Grid
        container
        display="flex"
        flexDirection="row"
        direction="row"
        justify="center"
        justifyContent="space-evenly"
        alignItems="flex-start"
      >
        <div style={{ display: "inline" }}>
          <Typography variant="h5">Patient Name</Typography>
          <Grid
            container
            direction="column"
            justifyContent="space-evenly"
            alignItems="center"
            style={{ gap: 45, marginTop: 10 }}
          >
            {card.map((card, index) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <Card
                    variant="outlined"
                    style={{ backgroundColor: "#ffeee4" }}
                  >
                    <CardContent>{card.name}</CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </div>
        <div style={{ display: "inline" }}>
          <Typography variant="h5">Relatives Enrolled</Typography>
          <Grid
            container
            direction="column"
            justifyContent="space-evenly"
            alignItems="center"
            style={{ gap: 45, marginTop: 10 }}
          >
            {card.map((card, index) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <Card
                    variant="outlined"
                    style={{ backgroundColor: "#888bd2" }}
                  >
                    <CardContent>{card.relatives}</CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </div>
        <div style={{ display: "inline" }}>
          <Typography variant="h5">Code</Typography>
          <Grid
            container
            direction="column"
            justifyContent="space-evenly"
            alignItems="center"
            style={{ gap: 45, marginTop: 10 }}
          >
            {card.map((card, index) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <Card
                    variant="outlined"
                    style={{ backgroundColor: "#fb3b30" }}
                  >
                    <CardContent>{card.id}</CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </Grid>
    </div>
  );
};

export default Enrolled;
