import React, { useState, useEffect, useMemo } from "react";
import "./home.scss";
import FeaturedInfo from "../../Components/Featuredinfo/Featuredinfo";
import Chart from "../../Components/Chart/Chart";
import { userData } from "../../Data";
import WidgetSm from "../../Components/WidgetSm/WidgetSm";
import WidgetLg from "../../Components/WidgetLg/WidgetLg";
import axios from "axios";
const Home = () => {
  const Months = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );
  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get("/users/stats", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMzg4ZjkxNTBlOGRlNTgxYWE3ODIwYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMTYzMzQ3MiwiZXhwIjoxNjMyNDk3NDcyfQ.2DAKkkXxGGhQJ-PbuSb7sVMF1rXxA3VpIQpTa87-ddk",
          },
        });
        // const statsList = res.data.sort(function (a, b) {
        //   return a._id - b._id;
        // });

        console.log(res);

        res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: Months[item._id - 1], "New User": item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [Months]);
  // console.log(userStats);

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="New User" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
