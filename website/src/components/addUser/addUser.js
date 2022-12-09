import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { dateFormat } from "../../hooks/convertDateFormat";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const addUser = () => {
  const [newUserInfo, setNewUserInfo] = useState({
    created: dateFormat(new Date()),
  });
  const [startDate] = useState(new Date());
  const [birthDate, setBirthDate] = useState(new Date());

  useEffect(() => {
    setNewUserInfo((data) => ({
      ...data,
      birthDate,
    }));
  }, [birthDate]);

  const handleChange = (e) => {
    setNewUserInfo((curr) => ({
      ...curr,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newUserInfo.firstname.type, newUserInfo.lastname.type);
    // axios.post("http://localhost:8080/users", newUserInfo);

    // setNewUserInfo({
    //   firstname: firstname,
    //   lastname: lastname,
    //   birthdate: birthdate,
    //   gender: gender,
    // });

    console.log(newUserInfo);
    //console.log(birthDate);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>FirstName</label>
        <input
          type="text"
          name="firstName"
          value={newUserInfo.firstname}
          onChange={handleChange}
          placeholder="firstname"
        ></input>
        <label>LastName</label>
        <input
          type="text"
          name="lastname"
          value={newUserInfo.lastname}
          onChange={handleChange}
          placeholder="lastName"
        ></input>
        <select
          name="gender"
          value={newUserInfo.gender}
          onChange={handleChange}
        >
          <option>Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <label>Birthday</label>
        <DatePicker
          name="birthdate"
          selected={startDate}
          onChange={(date) => {
            setBirthDate(dateFormat(date));
          }}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default addUser;
