import * as React from "react";
import { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import HeaderAdmin from "./HeaderAdmin";
import { Link } from "react-router-dom";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import swal from "sweetalert";
import "./Admin.css";

export default function View() {
  const [card, setCard] = useState([]);

  useEffect(() => {
    (async () => {
      // console.log(props.match.params.item_id)
      let patientName;
      try {
        //let token = localStorage.getItem("itemName");
        //let idi = props.match.params.name;
        // setOrderitem(id);
        let response = await fetch(
          "http://hackathonwork.pythonanywhere.com/updates/list",
          {
            method: "GET",
            headers: {
              // Authorization: `token ${token}`,
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

  const deleteitem = (patient) => {
    fetch(
      `https://hackathonwork.pythonanywhere.com/updates/delete/${patient}`,
      {
        method: "DELETE",
      }
    ).then((result) => {
      result.json().then((resp) => {
        console.log(resp);
      });
    });
  };

  return (
    <div>
      <HeaderAdmin activePage="View" />
      <Box ml={5} mr={5} pl={7} pr={3} mt={3} pt={3} mb={1} pb={1}>
        <Grid
          container
          spacing={3}
          alignContent="flex-start"
          justifyContent="center"
          marginleft={40}
          marginright={40}
        >
          {card.map((card, _) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={card.id}>
                <Link to={{ pathname: "/edit/" + card.name + "/" + card.id }}>
                  <FiEdit
                    style={{
                      float: "right",
                      marginRight: "5px",
                      textDecoration: "none",
                      color:"black",
                      fontSize:"1.2rem"
                    }}
                  />
                </Link>
                <RiDeleteBin5Line
                  style={{
                    float: "right",
                    marginRight: "5px",
                    textDecoration: "none",
                    fontSize:"1.2rem",
                    color:"red",
                    cursor:"pointer"
                  }}
                  onClick={() => {
                    deleteitem(card.id);
                    swal("Done!", "Item deleted successfully!", "success");
                  }}
                />
                <Link
                  to={{ pathname: "/view/" + card.name + "/" + card.id }}
                  style={{ textDecoration: "none" }}
                >
                  <CardActionArea>
                    <Card
                      variant="outlined"
                      style={{
                        height: "36vh",
                        justifyContent:"center"
                      }}
                      className="comCard"
                    >
                      <CardMedia
                        component="img"
                        height="340"
                        image={card.photo}
                        style={{justifyContent:"center", marginLeft:"55px"}}
                        className='comImg'
                      />
                      <CardContent>
                        <Typography variant="h4" align="center" className="comName">
                          {card.name}
                        </Typography>
                      </CardContent>
                    </Card>
                  </CardActionArea>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
}
