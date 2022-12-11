import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import "./addUser.css";
import heroImage from "../../images/registration-photo.png";
import axios from "axios";

// interface IUser {
//   id: number;
//   birthDate: Date;
//   firstName: string;
//   lastName: string;
//   gender: string;
//   created: Date;
// }

const addUser = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { usersinfo } = location.state;
  const [newUserInfo, setNewUserInfo] = useState({
    id: 1,
    birthDate: null,
    firstName: "",
    lastName: "",
    gender: "",
    created: moment(new Date()).format("YYYY-MM-DD"),
  });

  const [birthDate, setBirthDate] = useState(new Date());
  // useEffect(() => {
  //   const maxIdIndex = lastUserId + 1;
  //   // const maxIdIndex = usersinfo[usersinfo.length - 1].id + 1;
  //   setLastUserId(maxIdIndex);
  // }, []);

  useEffect(() => {
    addId();
    setNewUserInfo((data) => ({
      ...data,
      // id: newUserInfo.id,
      birthDate: moment(birthDate).format("YYYY- MM-DD"),
    }));
  }, [birthDate]);

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
      const res = await axios.post("http://localhost:8080/users", newUserInfo);
      console.log(res.data);

      navigate("/", { replace: true });
    } catch (err) {
      console.log(err);
    }
    console.log(newUserInfo);

    //console.log(birthDate);
  };
  const handleDate = (date) => {
    const formatedDate = moment(date).format("YYYY- MM-DD");
    setBirthDate(formatedDate);
  };
  return (
    <div className="userInfo-container">
      <form
        className="form-container"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <div className="userInfo-left">
          <img src={heroImage} />
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
                // placeholder="firstname"
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
                // placeholder="lastname"
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
                name="gender"
                value={newUserInfo.gender}
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
              {/* <button onClick={() => navigate("/", { replace: true })}>
                Back
              </button> */}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default addUser;
