import React from "react";
import "./newUser.scss";

const NewUser = () => {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label className="newUserLabel">Username</label>
          <input type="text" placeholder="john" className="newUserInput" />
        </div>
        <div className="newUserItem">
          <label className="newUserLabel">Full Name</label>
          <input
            type="text"
            placeholder="john Smith"
            className="newUserInput"
          />
        </div>
        <div className="newUserItem">
          <label className="newUserLabel">Email</label>
          <input
            type="email"
            placeholder="john@gmail.com"
            className="newUserInput"
          />
        </div>
        <div className="newUserItem">
          <label className="newUserLabel">Password</label>
          <input
            type="password"
            placeholder="password"
            className="newUserInput"
          />
        </div>
        <div className="newUserItem">
          <label className="newUserLabel">Phone</label>
          <input
            type="text"
            placeholder="0753365577"
            className="newUserInput"
          />
        </div>
        <div className="newUserItem">
          <label className="newUserLabel">Address</label>
          <input
            type="text"
            placeholder="London | United Kingdom"
            className="newUserInput"
          />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input
              className="newUserGenderInput"
              type="radio"
              name="gender"
              id="male"
              value="male"
            />
            <label className="genderLabel" for="male">
              Male
            </label>
            <input
              className="newUserGenderInput"
              type="radio"
              name="gender"
              id="female"
              value="female"
            />
            <label for="female" className="genderLabel">
              Female
            </label>
            <input
              className="newUserGenderInput"
              type="radio"
              name="gender"
              id="other"
              value="other"
            />
            <label for="other" className="genderLabel">
              Other
            </label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select name="active" id="active" className="newUserSelect">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton"> Create</button>
      </form>
    </div>
  );
};

export default NewUser;
