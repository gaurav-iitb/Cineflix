import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import { userData } from "../../dummyData";
import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import "./Homepage.css";

function Homepage() {
  const months = useMemo(
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
      "Non",
      "Dec",
    ],
    []
  );
  const [userstats, setUserstats] = useState([]);
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  useEffect(() => {
    console.log("sorry");
    const getStats = async () => {
      try {
        const res = await axiosInstance.get("/users/stats", {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        const statList = res.data.sort(function (a, b) {
          return a._id - b._id;
        });
        let arr = [];
        statList.map(
          (item) =>
            // setUserstats((prev) => [
            //   ...prev,
            //   { name: months[item._id - 1], "New User": item.total },
            // ])
            (arr = [
              ...arr,
              { name: months[item._id - 1], "New User": item.total },
            ])
        );
        console.log(arr);
        setUserstats(arr);
      } catch (err) {
        console.log("err is", err);
      }
    };
    getStats();
  }, []);

  console.log(userstats);

  return (
    <div className="homepage">
      <FeaturedInfo />
      <Chart data={userstats} title="User Analytics" grid dataKey="New User" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}

export default Homepage;
