import React from "react";
import PermIdentity from "@material-ui/icons/PermIdentity";
import CalendarToday from "@material-ui/icons/CalendarTodayRounded";
import PhoneAndroid from "@material-ui/icons/PhoneAndroidRounded";
import Mail from "@material-ui/icons/MailOutlineRounded";
import Home from "@material-ui/icons/HomeRounded";
import Publish from "@material-ui/icons/PublishRounded";
import { Link } from "react-router-dom";
import "./user.scss";

const User = () => {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images.unsplash.com/photo-1630713815198-17ff8a8a7103?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2MXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="userShowImg"
            />

            <div className="userShowTopTitle">
              <span className="userShowUsername">Anna Deck</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">annadeck49</span>
            </div>

            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">16.08.1997</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">0755566699</span>
            </div>

            <div className="userShowInfo">
              <Mail className="userShowIcon" />
              <span className="userShowInfoTitle">annadeck49@gmail.com</span>
            </div>

            <div className="userShowInfo">
              <Home className="userShowIcon" />
              <span className="userShowInfoTitle">London | United Kingdom</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label className="label">Username</label>
                <input
                  type="text"
                  placeholder="annadeck49"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Anna Deck"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="annadeck49@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="0755566699"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="London | United Kingdom"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  src="https://images.unsplash.com/photo-1630692929609-1fbfb477602e?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2M3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className="userUpdateImg"
                />
              </div>
              <label htmlFor="file">
                <Publish className="publishLabel" />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="userUpdateButton"> Update</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
