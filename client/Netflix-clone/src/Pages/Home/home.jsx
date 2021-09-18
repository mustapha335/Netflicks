import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/navbar";
import Featured from "../../Components/Featured/featured";
import List from "../../Components/List/list";
import axios from "axios";

import "./Home.scss";
const Home = ({ type }) => {
  const [lists, setList] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre" && "genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMzg4ZjkxNTBlOGRlNTgxYWE3ODIwYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMTM2NzM3OCwiZXhwIjoxNjMyMjMxMzc4fQ.E8Ogn2BRsJPSW3eDPZ7pBXhOdS5eBK-khikB1PGcRME",
            },
          }
        );
        setList(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {lists.map((list, i) => (
        <List list={list} key={i} />
      ))}
    </div>
  );
};

export default Home;
