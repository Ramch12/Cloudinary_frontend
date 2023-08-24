import { useState } from "react";
import { TextField, Grid, Button, Box, CircularProgress,Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import axios from "axios";

const Upload = () => {
  const [formData, setFormdata] = useState({ Title: "", Description: "" });
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");
  const [progress, setProgress] = useState(false);

  function handleChange(e) {
    setFormdata({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setProgress(true);
    try {
      const result = await axios.post("https://cloudinary-backend-ko2c.onrender.com/upload", {
        image,
        video,
        ...formData,
      });
      if (result.status === 201) {
        setProgress(false);
        alert("successfully uploaded");
      }
    } catch (err) {
      setProgress(false);
      console.log(err);
    }
  }

  function handleImage(e) {
    const file = e.target.files[0];
    setFiletoBase(file);
  }

  function handleVideo(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setVideo(reader.result);
      console.log(video);
    };
  }

  function setFiletoBase(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  }

  return (
    <>
      <Navbar />
      {progress ? (
        <Box
          sx={{
            display: "flex",
            flexDirection:'column',
            justifyContent:"center",
            alignItems:"center"
          }}>
          <CircularProgress />
          <Typography variant="caption">processing</Typography>
        </Box>
      ) : (
        <form action="" onSubmit={handleSubmit}>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
              marginX: "auto",
              marginTop: "50px",
            }}>
            <TextField
              id="outlined-basic"
              required
              label="Title"
              variant="outlined"
              name="Title"
              onChange={handleChange}
              inputProps={{ maxLength: 50 }}
              sx={{ marginY: "5px" }}
            />
            <TextField
              id="outlined-basic"
              required
              label="Description"
              name="Description"
              variant="outlined"
              multiline
              onChange={handleChange}
              inputProps={{ maxLength: 250 }}
              rows={3}
              sx={{ marginY: "5px" }}
            />
            <Grid sx={{ marginY: "20px" }}>
              <label htmlFor="file" className="font-semibold">
                Select An Image:-
              </label>
              <input
                type="file"
                id="file"
                accept=".jpg, .jpeg, .png"
                name="Image"
                onChange={handleImage}
                required
              />
            </Grid>
            <Grid sx={{ marginY: "20px" }}>
              <label htmlFor="file" className="font-semibold">
                Select A Video:-
              </label>
              <input
                type="file"
                id="file"
                accept=".MPG,.AVI,.MP4"
                name="video"
                onChange={handleVideo}
              />
            </Grid>
            <Button
              type="submit"
              variant="contained"
              sx={{ width: "50%", marginX: "auto", backgroundColor: "blue" }}>
              Submit
            </Button>
          </Grid>
        </form>
      )}
    </>
  );
};

export default Upload;
