import React, { useState, useEffect } from "react";
import axios from "axios";

const home = () => {
  const [usersinfo, setUsersInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:8080/users");
      setUsersInfo(res.data.items);
      console.log(usersinfo);
    };
    fetchData();
  }, [usersinfo]);

  return usersinfo.map((user) => (
    <div key={user.id}>
      <div>
        {user.firstName} {user.lastName}
      </div>
      <div>{user.birthDate}</div>
      <div>{user.gender}</div>
      <div>{user.created}</div>
    </div>
  ));
};

export default home;
