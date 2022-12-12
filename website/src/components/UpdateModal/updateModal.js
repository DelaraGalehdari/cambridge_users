import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import heroImage from "../../images/registration-photo.png";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import moment from "moment";
import "../addUser/addUser.css";

const updateModal = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = location.state;
  const [updatedUserInfo, setUpdatedUserInfo] = useState({
    id: user.id,
    birthDate: user.birthDate,
    firstName: user.firstName,
    lastName: user.lastName,
    gender: user.gender,
    created: user.created,
  });
  const [userBirth, setUserBirth] = useState(updatedUserInfo.birthDate);

  useEffect(() => {
    setUpdatedUserInfo((data) => ({
      ...data,
      birthDate: moment(userBirth).format("YYYY- MM-DD"),
    }));
  }, [userBirth]);

  const handleChange = (e) => {
    setUpdatedUserInfo((curr) => ({
      ...curr,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:8080/users/${user.id}`,
        updatedUserInfo
      );
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
                value={updatedUserInfo.firstName}
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
                value={updatedUserInfo.lastName}
                onChange={handleChange}
              ></input>
              <label className="input_label">LastName</label>
            </div>

            <div className="input">
              <DatePicker
                name="birthdate"
                selected={new Date(userBirth)}
                onChange={(date) => setUserBirth(date)}
                required
                className="input_field"
              />
              <label className="input_label_birth">Birthday</label>
            </div>
            <div className="input">
              <select
                name="gender"
                value={updatedUserInfo.gender}
                onChange={handleChange}
                required
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

export default updateModal;
