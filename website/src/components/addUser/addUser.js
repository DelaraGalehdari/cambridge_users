import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
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
  const [newUserInfo, setNewUserInfo] = useState({
    created: moment(new Date()).format("YYYY-MM-DD"),
  });
  const [startDate] = useState(new Date());
  const [birthDate, setBirthDate] = useState(new Date());
  const [userId, setUserId] = useState();

  useEffect(() => {
    // const maxIdIndex = usersinfo[usersinfo.length - 1].id + 1;
    // setUserId(maxIdIndex);
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    // try {
    //   const res = await axios.post("http://localhost:8080/users", newUserInfo);
    //   console.log(res.data);
    // } catch (err) {
    //   console.log(err);
    // }
    console.log(newUserInfo);

    //console.log(birthDate);
  };
  const handleDate = (date) => {
    const formatedDate = moment(date).format("YYYY- MM-DD");
    setBirthDate(formatedDate);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Birthday</label>
        <DatePicker
          name="birthdate"
          selected={birthDate}
          onChange={handleDate}
        />
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
          name="lastName"
          value={newUserInfo.lastname}
          onChange={handleChange}
          placeholder="lastname"
        ></input>
        <select
          name="gender"
          value={newUserInfo.gender}
          onChange={handleChange}
        >
          <option>Select gender</option>
          <option value="M">Male</option>
          <option value="F">Female</option>
        </select>

        <input type="submit" />
      </form>
      <button onClick={() => navigate("/", { replace: true })}>Back</button>
    </div>
  );
};

export default addUser;
