import React from "react";
import NotificationsIcon from "@material-ui/icons/NotificationsNone";
import LanguageIcon from "@material-ui/icons/Language";
import SettingsIcon from "@material-ui/icons/Settings";
import "./topbar.scss";
import Avatar from "./avatar-img.jpeg";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topbarLeft">
          <span className="logo">Admin</span>
        </div>
        <div className="topbarRight">
          <div className="topbarIconContainer">
            <NotificationsIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <LanguageIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <SettingsIcon />
          </div>
          <img src={Avatar} alt="" className="avatarPic" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
