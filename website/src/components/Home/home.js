import React, { useState, useEffect } from "react";
import PaginateUsers from "../PaginateUsers/paginateUsers";
import DeleteUser from "../DeleteUser/deleteUser";
import UpdateUser from "../UpdateUser/updateUser";
import { Link } from "react-router-dom";
import axios from "axios";
import "./homeStyle.css";
import girl_photo from "../../images/girl.png";
import boy_photo from "../../images/boy.png";

const home = () => {
  const [usersinfo, setUsersInfo] = useState([]);
  const [startOffset, setStartOffset] = useState(0);
  const [endOffset, setEndOffset] = useState(6);
  const [showUsers, setShowUsers] = useState([]);
  const fetch_url = "http://localhost:8080/users";

  //fetch data from api
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(fetch_url);
      setUsersInfo(res.data.items);
      setShowUsers(usersinfo.slice(startOffset, endOffset));
    };
    fetchData();
  }, [usersinfo]);

  //➡️define start and end number of stories for paginations
  const handlePage = (minIndex, maxIndex) => {
    setStartOffset(minIndex);
    setEndOffset(maxIndex);
  };

  return (
    <div className="pagin-holder">
      <div className="pagin-style">
        <PaginateUsers usersinfo={usersinfo} handlePage={handlePage} />
      </div>
      <div className="add-style">
        <Link to="/addUser" state={{ usersinfo: usersinfo }}>
          <button className="btn_add">
            <div className="circle"></div>Add User
          </button>
        </Link>
      </div>

      <div className="users-container">
        {showUsers.map((user) => (
          <div key={user.id} className="user-card box back-color">
            <img
              alt="user-profile"
              src={user.gender === "F" ? girl_photo : boy_photo}
            />
            <h4 className="back-color">
              {user.firstName} {user.lastName}
            </h4>
            <div className="back-color">
              <span className="back-color">BirthDate : </span>
              {user.birthDate}
            </div>
            <div className="back-color">
              <span className="back-color">Gender : </span>
              {user.gender === "F" ? "Female" : "Male"}
            </div>
            <div className="back-color">
              <span className="back-color">Created at : </span>
              {user.created}
            </div>
            <div className="btn-change">
              <DeleteUser
                userId={user.id}
                name={user.firstName + " " + user.lastName}
              />
              <UpdateUser user={user} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default home;
