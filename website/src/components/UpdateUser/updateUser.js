import React from "react";
import { Link } from "react-router-dom";
import "./updateUser.css";

const updateUser = ({ user }) => {
  return (
    <div>
      <Link to="/update" state={{ user: user }}>
        <button className="btn_update update_back-color">Update</button>
      </Link>
    </div>
  );
};

export default updateUser;
