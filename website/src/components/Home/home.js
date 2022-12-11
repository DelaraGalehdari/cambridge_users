import React, { useState, useEffect } from "react";
import PaginateUsers from "../PaginateUsers/paginateUsers";
import AddUser from "../addUser/addUser";
import DeleteUser from "../DeleteUser/deleteUser";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./homeStyle.css";
import girl_photo from "../../images/girl.png";
import boy_photo from "../../images/boy.png";

const home = () => {
  const navigate = useNavigate();
  const [usersinfo, setUsersInfo] = useState([]);
  const [startOffset, setStartOffset] = useState(0);
  const [endOffset, setEndOffset] = useState(6);
  const [showUsers, setShowUsers] = useState([]);
  const [showAdd, setShowAdd] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:8080/users");
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
  const navigateComponent = () => {
    setShowAdd(!showAdd);
    navigate("/addUser", { replace: true });
  };

  return (
    // !showAdd ? (
    <div className="pagin-holder">
      <PaginateUsers usersinfo={usersinfo} handlePage={handlePage} />
      <Link to="/addUser" state={{ usersinfo: usersinfo }}>
        <button className="btn_add">
          <div className="circle"></div>Add User
        </button>
      </Link>
      {/* <button onClick={navigateComponent}>Add User</button> */}

      <div className="users-container">
        {showUsers.map((user) => (
          <div key={user.id} className="user-card box back-color">
            <img src={user.gender === "F" ? girl_photo : boy_photo} />
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
            <DeleteUser
              userId={user.id}
              name={user.firstName + " " + user.lastName}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
{
  /* {showUsers.map((user) => (
        <div key={user.id}>
          <div className="users-container">
            <div>
              {user.firstName} {user.lastName}
            </div>
            <div>{user.id}</div>
            <div>{user.birthDate}</div>
            <div>{user.gender}</div>
            <div>{user.created}</div>
            <div>
              <DeleteUser userId={user.id} />
            </div>
          </div>
        </div>
      ))} */
}

{
  /* // ) : (
  //   <AddUser usersinfo={showAdd} />
  // ); */
}
{
  /* }; */
}

export default home;
