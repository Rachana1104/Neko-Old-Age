import React, { useEffect } from "react";
import { useState } from "react";
import { Grid, Typography, TextField, Button } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const useStyles = makeStyles(() => ({
  inputTitles: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "25px",
    lineHeight: "30px",
    marginRight: "50px",
  },
}));

export default function Edit({ data, setData }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState(null);
  const [dob, setDob] = useState(null);
  const [roomNo, setroomNo] = useState(null);
  const [allergies, setAllergies] = useState(null);
  const [medicines, setMedicines] = useState(null);
  const [healthStatus, sethealthStatus] = useState(null);
  const [appointments, setAppointments] = useState(null);
  const [food, setFood] = useState(null);
  const [relatives, setRelatives] = useState(null);
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    let loadPatients = async () => {
      const result = await axios.get(
        `http://hackathonwork.pythonanywhere.com/updates/retrieve/${id}`
      );
      setName(result.data.data.name);
      setDob(result.data.data.dob);
      setroomNo(result.data.data.roomno);
      setAllergies(result.data.data.allergies);
      setMedicines(result.data.data.medicine);
      sethealthStatus(result.data.data.healthstatus);
      setAppointments(result.data.data.appointment);
      setFood(result.data.data.food);
      setRelatives(result.data.data.relatives);
      setPhoto(result.data.data.photo);
    };
    loadPatients();
  }, [id]);
  
  const editLog = async () => {
    let formField = new FormData();

    formField.append("name", name);
    formField.append("dob", dob);
    formField.append("roomno", roomNo);
    formField.append("allergies", allergies);
    formField.append("medicine", medicines);
    formField.append("healthstatus", healthStatus);
    formField.append("food", food);
    formField.append("relatives", relatives);
    if (photo !== null) {
      formField.append("photo", photo);
    }
    await axios({
      method: "PATCH",
      url: `http://hackathonwork.pythonanywhere.com/updates/update/${id}`,
      data: formField,
    }).then((response) => {
      console.log(response);
      navigate(`/view/${name}/${id}`);
    });
  };

  const classes = useStyles();
  return (
    <div className={classes.grid}>
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="flex-start"
        style={{ gap: 15 }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          style={{ marginTop: "20px", marginLeft: "36px" }}
        >
          <Typography style={{ fontSize: "30px" }}>
            Edit {name}'s Log
          </Typography>
        </Grid>
        <Grid container direction="row" marginBottom={5}>
          <Grid item sm={6} md={3} style={{ marginLeft: "46px" }}>
            <Typography className={classes.inputTitles}>Name</Typography>
          </Grid>
          <Grid item sm={6} md={3} style={{ marginLeft: "15px" }}>
            <TextField
              variant="standard"
              autoComplete
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ width: "250px" }}
            />
          </Grid>
        </Grid>

        <Grid container direction="row" marginBottom={5}>
          <Grid item sm={6} md={3} style={{ marginLeft: "46px" }}>
            <Typography className={classes.inputTitles}>
              Date Of Birth
            </Typography>
          </Grid>
          <Grid item sm={6} md={3} style={{ marginLeft: "15px" }}>
            <TextField
              variant="standard"
              autoComplete
              type="text"
              name="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              style={{ width: "250px" }}
            />
          </Grid>
        </Grid>

        <Grid container direction="row" marginBottom={5}>
          <Grid item sm={6} md={3} style={{ marginLeft: "46px" }}>
            <Typography className={classes.inputTitles}>
              Room Number Alloted
            </Typography>
          </Grid>
          <Grid item sm={6} md={3} style={{ marginLeft: "15px" }}>
            <TextField
              variant="standard"
              autoComplete
              type="text"
              name="name"
              value={roomNo}
              onChange={(e) => setroomNo(e.target.value)}
              style={{ width: "250px" }}
            />
          </Grid>
        </Grid>

        <Grid container direction="row" marginBottom={5}>
          <Grid item sm={6} md={3} style={{ marginLeft: "46px" }}>
            <Typography className={classes.inputTitles}>Allergies</Typography>
          </Grid>
          <Grid item sm={6} md={3} style={{ marginLeft: "15px" }}>
            <TextField
              variant="standard"
              autoComplete
              type="text"
              name="name"
              value={allergies}
              onChange={(e) => setAllergies(e.target.value)}
              style={{ width: "250px" }}
            />
          </Grid>
        </Grid>

        <Grid container direction="row" marginBottom={5}>
          <Grid item sm={6} md={3} style={{ marginLeft: "46px" }}>
            <Typography className={classes.inputTitles}>Medicines</Typography>
          </Grid>
          <Grid item sm={6} md={3} style={{ marginLeft: "15px" }}>
            <TextField
              variant="standard"
              autoComplete
              type="text"
              name="name"
              value={medicines}
              onChange={(e) => setMedicines(e.target.value)}
              style={{ width: "250px" }}
            />
          </Grid>
        </Grid>

        <Grid container direction="row" marginBottom={5}>
          <Grid item sm={6} md={3} style={{ marginLeft: "46px" }}>
            <Typography className={classes.inputTitles}>
              Health Status
            </Typography>
          </Grid>
          <Grid item sm={6} md={3} style={{ marginLeft: "15px" }}>
            <TextField
              variant="standard"
              autoComplete
              type="text"
              name="name"
              value={healthStatus}
              onChange={(e) => sethealthStatus(e.target.value)}
              style={{ width: "250px" }}
            />
          </Grid>
        </Grid>

        <Grid container direction="row" marginBottom={5}>
          <Grid item sm={6} md={3} style={{ marginLeft: "46px" }}>
            <Typography className={classes.inputTitles}>
              Appointments
            </Typography>
          </Grid>
          <Grid item sm={6} md={3} style={{ marginLeft: "15px" }}>
            <TextField
              variant="standard"
              autoComplete
              type="text"
              name="name"
              value={appointments}
              onChange={(e) => setAppointments(e.target.value)}
              style={{ width: "250px" }}
            />
          </Grid>
        </Grid>

        <Grid container direction="row" marginBottom={5}>
          <Grid item sm={6} md={3} style={{ marginLeft: "46px" }}>
            <Typography className={classes.inputTitles}>Food</Typography>
          </Grid>
          <Grid item sm={6} md={3} style={{ marginLeft: "15px" }}>
            <TextField
              variant="standard"
              autoComplete
              type="text"
              name="name"
              value={food}
              onChange={(e) => setFood(e.target.value)}
              style={{ width: "250px" }}
            />
          </Grid>
        </Grid>

        <Grid container direction="row" marginBottom={5}>
          <Grid item sm={6} md={3} style={{ marginLeft: "46px" }}>
            <Typography className={classes.inputTitles}>
              Relatives Known
            </Typography>
          </Grid>
          <Grid item sm={6} md={3} style={{ marginLeft: "15px" }}>
            <TextField
              variant="standard"
              autoComplete
              type="text"
              name="name"
              value={relatives}
              onChange={(e) => setRelatives(e.target.value)}
              style={{ width: "250px" }}
            />
          </Grid>
        </Grid>

        <Grid container direction="row" marginBottom={5}>
          <Grid item sm={6} md={3} style={{ marginLeft: "46px" }}>
            <Typography className={classes.inputTitles}>Photo</Typography>
          </Grid>
          <Grid item sm={6} md={3} style={{ marginLeft: "15px" }}>
            <TextField
              variant="standard"
              type="file"
              name="photo"
              onChange={(e) => setPhoto(e.target.files[0])}
              style={{ width: "250px" }}
            />
          </Grid>
        </Grid>

        <Button
          type="submit"
          onClick={editLog}
          variant="contained"
          sx={{ ml: 2, mt: 2, mb: 1 }}
          style={{
            backgroundColor: "#fb3b30",
            color: "#888bd2",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          Update
        </Button>
      </Grid>
    </div>
  );
}
