import React from "react";
import LineStyle from "@material-ui/icons/LineStyleRounded";
import Timeline from "@material-ui/icons/TimelineRounded";
import TrendingUp from "@material-ui/icons/TrendingUpRounded";
import Person from "@material-ui/icons/PersonRounded";
import Money from "@material-ui/icons/AttachMoneyOutlined";
import Equalizer from "@material-ui/icons/EqualizerOutlined";
import Mail from "@material-ui/icons/MailOutlineRounded";
import DynamicFeed from "@material-ui/icons/DynamicFeedRounded";
import Message from "@material-ui/icons/MessageRounded";
import BusinessCenter from "@material-ui/icons/BusinessCenterRounded";
import Report from "@material-ui/icons/ReportOutlined";
import Play from "@material-ui/icons/PlayCircleOutline";
import List from "@material-ui/icons/List";
import { Link } from "react-router-dom";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle"> Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle"> Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <Person className="sidebarIcon" />
                Users
              </li>
            </Link>

            <Link to="/movies" className="link">
              <li className="sidebarListItem">
                <Play className="sidebarIcon" />
                Movies
              </li>
            </Link>
            <Link to="/lists" className="link">
              <li className="sidebarListItem">
                <List className="sidebarIcon" />
                Lists
              </li>
            </Link>
            <li className="sidebarListItem">
              <Equalizer className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle"> Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Mail className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <Message className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle"> Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <BusinessCenter className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
