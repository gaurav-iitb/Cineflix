import React from "react";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import "./Watch.css";
import { Link, useLocation } from "react-router-dom";

function Watch() {
  const location = useLocation();
  console.log(location);
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlinedIcon />
          <p>home</p>
        </div>
      </Link>
      <video
        className="content-video"
        autoPlay
        progress
        controls
        src={location.state.movie.video}
      ></video>
    </div>
  );
}

export default Watch;
