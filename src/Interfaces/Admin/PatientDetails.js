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
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function PatientDetails() {
  //console.log(data);
  const { id } = useParams();

  const [card, setCard] = useState([]);

  useEffect(() => {
    (async () => {
      let patientName;
      try {
        let response = await fetch(
          `http://hackathonwork.pythonanywhere.com/updates/retrieve/${id}`,
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
  }, [id]);

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
                  {/* <TableCell >Edit</TableCell> */}
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
                    {/* <TableCell align="center">{row.Edit}</TableCell> */}
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
