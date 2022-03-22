import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Grid,
  Typography,
} from "@mui/material";

export default function Relative() {
  const [card, setCard] = useState([]);

  const patient = localStorage.getItem('id');
  console.log(patient);

  useEffect(() => {
    (async () => {
      let patientData;
      try {
        // let id = props.match.params.id;
        // console.log(id);
        // let name = props.match.params.code;
        // console.log(name);
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

  function createData(Parameter, Information) {
    return { Parameter, Information };
  }

  const rows = [
    createData("Food", card.food),
    createData("Medicines", card.medicine),
    createData("Appointment(s)", card.appointment),
    createData("Health Status", card.healthstatus),
    createData("Allergie(s)", card.allergies),
    createData("Room Number Alloted", card.roomno),
    createData("Relatives Enrolled", card.relatives),
    createData("Member Photo", card.photo),
  ];

  return (
    <>
      <div>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          style={{ marginTop: "80px", marginLeft: "80px" }}
        >
          <Typography style={{ fontSize: "30px" }}>
            Patient Name: {card.name}
          </Typography>
        </Grid>
        <Grid
          container
          width="100vh"
          display="flex"
          alignContent="center"
          justifyContent="center"
          marginTop={5}
          marginLeft={10}
        >
          <TableContainer>
            <Table
              sx={{ maxWidth: 700 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead style={{ backgroundColor: "#888bd2" }}>
                <TableRow>
                  <TableCell>Parameter</TableCell>
                  <TableCell>Information</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.Parameter}
                    </TableCell>
                    <TableCell>{row.Information}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </div>
    </>
  );
}
