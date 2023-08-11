import "./WidgetSm.css";
import axios from "axios";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { useState } from "react";
import { useEffect } from "react";

export default function WidgetSm() {
  const [newUsers, setusers] = useState([]);
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axiosInstance.get("/users?new=true", {
          headers: {
            token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setusers(res.data);
      } catch (err) {
        console.log("widgetsm",err);
      }
    };
    getNewUsers();
  }, []);
  console.log(newUsers)

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map((user) => (
          <li className="widgetSmListItem">
            <img
              src={user.profilePic || "https://flyclipart.com/thumb2/default-avatar-png-icon-free-download-518373.png" }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
              {/* <span className="widgetSmUserTitle">Software Engineer</span> */}
            </div>
            <button className="widgetSmButton">
              <VisibilityOutlinedIcon className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
