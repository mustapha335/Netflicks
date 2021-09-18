import React from "react";
import ArrowBack from "@material-ui/icons/ArrowBackRounded";
import { Link, useLocation } from "react-router-dom";
// import Video from "./Video.mp4";
import "./Watch.scss";

const Watch = () => {
  const location = useLocation();

  const movie = location.movie;
  console.log(movie);
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBack />
          Home
        </div>
      </Link>
      <video className="video" autoPlay controls src={movie.video} />
    </div>
  );
};

export default Watch;
