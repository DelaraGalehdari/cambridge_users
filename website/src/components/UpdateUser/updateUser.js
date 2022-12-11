import React from "react";
import UpdateModal from "../UpdateModal/updateModal";
import { Link } from "react-router-dom";

const updateUser = ({ user }) => {
  return (
    <div>
      <Link to="/update" state={{ user: user }}>
        <button className="btn_delete back-color">Update</button>
      </Link>
    </div>
  );
};

export default updateUser;
