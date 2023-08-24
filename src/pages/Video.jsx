import { useLocation } from "react-router-dom";
import { CardMedia, Grid } from "@mui/material";
import Navbar from "../components/Navbar";
const Video = () => {
  const localtion = useLocation();
  const { url } = localtion.state;

  return (
    <>
      <Navbar />
      <Grid sx={{ width: "100%", marginX: "auto", background: "black" }}>
        <CardMedia
          component="iframe"
          height={"500px"}
          src={url}
          allow="autoPlay"
        />
      </Grid>
    </>
  );
};

export default Video;
