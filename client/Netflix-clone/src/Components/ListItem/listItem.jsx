import React, { useState, useEffect } from "react";
import PlayArrow from "@material-ui/icons/PlayArrow";
import Add from "@material-ui/icons/Add";
import ThumbUp from "@material-ui/icons/ThumbUpOutlined";
import ThumbDown from "@material-ui/icons/ThumbDownOutlined";
import axios from "axios";
import "./ListItem.scss";
import { Link } from "react-router-dom";

const ListItem = ({ index, item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("/movies/find/" + item, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMzg4ZjkxNTBlOGRlNTgxYWE3ODIwYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMTM2NzM3OCwiZXhwIjoxNjMyMjMxMzc4fQ.E8Ogn2BRsJPSW3eDPZ7pBXhOdS5eBK-khikB1PGcRME",
          },
        });

        setMovie(res.data);
        // console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);
  //console.log(movie);

  return (
    <Link to={{ pathname: "/watch", movie: movie }}>
      <div
        className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movie.img} alt="" />
        {isHovered && (
          <>
            <video src={movie.trailer} autoPlay={true} loop />
            <div className="itemInfo">
              <span className="title">{movie.title}</span>
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUp className="icon" />
                <ThumbDown className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>{movie.duration}</span>

                <span className="limit">{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
              <div className="desc">{movie.desc}</div>
              <div className="genre">{movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
};

export default ListItem;
