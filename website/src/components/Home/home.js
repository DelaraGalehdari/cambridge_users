import React, { useState, useEffect } from "react";
import PaginateUsers from "../PaginateUsers/paginateUsers";
import axios from "axios";

const home = () => {
  const [usersinfo, setUsersInfo] = useState([]);
  const [startOffset, setStartOffset] = useState(0);
  const [endOffset, setEndOffset] = useState(6);
  const [showUsers, setShowUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:8080/users");
      setUsersInfo(res.data.items);
      setShowUsers(usersinfo.slice(startOffset, endOffset));
      //   console.log(usersinfo);
    };
    fetchData();
  }, [usersinfo]);

  //➡️define start and end number of stories for paginations
  const handlePage = (minIndex, maxIndex) => {
    setStartOffset(minIndex);
    setEndOffset(maxIndex);
  };

  return (
    <div>
      <PaginateUsers usersinfo={usersinfo} handlePage={handlePage} />
      {showUsers.map((user) => (
        <div key={user.id}>
          <div>
            {user.firstName} {user.lastName}
          </div>
          <div>{user.birthDate}</div>
          <div>{user.gender}</div>
          <div>{user.created}</div>
        </div>
      ))}
    </div>
  );
};

export default home;
