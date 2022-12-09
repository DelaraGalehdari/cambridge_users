import React, { useState, useEffect } from "react";
import PaginateUsers from "../PaginateUsers/paginateUsers";
import AddUser from "../addUser/addUser";
import DeleteUser from "../DeleteUser/deleteUser";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const home = () => {
  const navigate = useNavigate();
  const [usersinfo, setUsersInfo] = useState([]);
  const [startOffset, setStartOffset] = useState(0);
  const [endOffset, setEndOffset] = useState(6);
  const [showUsers, setShowUsers] = useState([]);
  const [showAdd, setShowAdd] = useState(false);

  console.log(usersinfo);

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
    <div>
      <PaginateUsers usersinfo={usersinfo} handlePage={handlePage} />
      {/* <button onClick={navigateComponent}>Add User</button> */}
      <Link to="/addUser" state={{ usersinfo: usersinfo }}>
        <button>Add User</button>
      </Link>
      {showUsers.map((user) => (
        <div key={user.id}>
          <div>
            {user.firstName} {user.lastName}
          </div>
          <div>{user.id}</div>
          <div>{user.birthDate}</div>
          <div>{user.gender}</div>
          <div>{user.created}</div>
          <DeleteUser userId={user.id} />
        </div>
      ))}
    </div>
  );
  // ) : (
  //   <AddUser usersinfo={showAdd} />
  // );
};

export default home;
