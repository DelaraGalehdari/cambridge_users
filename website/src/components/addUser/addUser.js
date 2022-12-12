import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import "./addUser.css";
import heroImage from "../../images/registration-photo.png";
import axios from "axios";

const addUser = () => {
  const navigate = useNavigate();
  const post_url = "http://localhost:8080/users";
  const [newUserInfo, setNewUserInfo] = useState({
    id: 1,
    birthDate: null,
    firstName: "",
    lastName: "",
    gender: "",
    created: moment(new Date()).format("YYYY-MM-DD"),
  });
  const [birthDate, setBirthDate] = useState(new Date());

  //update birthday format
  useEffect(() => {
    addId();
    setNewUserInfo((data) => ({
      ...data,
      birthDate: moment(birthDate).format("YYYY- MM-DD"),
    }));
  }, [birthDate]);

  //handling onChange for all values
  const handleChange = (e) => {
    setNewUserInfo((curr) => ({
      ...curr,
      [e.target.name]: e.target.value,
    }));
  };
  const addId = () => {
    setNewUserInfo((data) => ({
      ...data,
      id: newUserInfo.id + 1,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post(post_url, newUserInfo);
      console.log(res.data);

      navigate("/", { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="userInfo-container">
      <form
        className="form-container"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <div className="userInfo-left">
          <img alt="hero" src={heroImage} />
        </div>
        <div className="userInfo-right">
          <div className="inputData">
            <p>Users Info</p>
            <div className="input">
              <input
                type="text"
                name="firstName"
                required
                className="input_field"
                value={newUserInfo.firstname}
                onChange={handleChange}
              ></input>
              <label className="input_label">FirstName</label>
            </div>
            <div className="input">
              <input
                type="text"
                name="lastName"
                required
                className="input_field"
                value={newUserInfo.lastname}
                onChange={handleChange}
              ></input>
              <label className="input_label">LastName</label>
            </div>
            <div className="input">
              <DatePicker
                name="birthdate"
                selected={birthDate}
                onChange={(date) => setBirthDate(date)}
                required
                className="input_field"
              />
              <label className="input_label_birth">Birthday</label>
            </div>
            <div className="input">
              <select
                required
                name="gender"
                value={newUserInfo.gender}
                onChange={handleChange}
                className="input_field input_field_select"
              >
                <option className="input_label input_label_select">
                  Select gender
                </option>
                <option className="input_label input_label_select" value="M">
                  Male
                </option>
                <option className="input_label input_label_select" value="F">
                  Female
                </option>
              </select>
            </div>
            <div className="input">
              <input className="btn_submit" type="submit" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default addUser;
