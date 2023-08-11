import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import "./Navbar.css";
import { IconButton } from "@mui/material";
function Navbar() {
  return (
    <nav className="nav-bar">
      <div className="left-txt">GS-Admin</div>
      <div className="right-txt">
        <div>
          <IconButton className="nav-icons">
            <NotificationsIcon fontSize="large" />
          </IconButton>
          <small className="no-top1">3</small>
        </div>
        <div>
          <IconButton className="nav-icons">
            <LanguageOutlinedIcon fontSize="large" />
          </IconButton>
          <small className="no-top2">1</small>
        </div>
        <IconButton className="nav-icons">
          <SettingsIcon fontSize="large" />
        </IconButton>
        <img
          className="profile-ic"
          src="https://media.istockphoto.com/photos/silhouette-of-profile-guy-in-shirt-with-white-button-in-aqua-menthe-picture-id1206439390?k=20&m=1206439390&s=170667a&w=0&h=wDX4xov95UOzjOgOkTqRurDiTepjhqAA7Q2iFofrO5c="
          alt=""
        />
        <button className="but-nav">SignOut</button>
      </div>
    </nav>
  );
}

export default Navbar;
