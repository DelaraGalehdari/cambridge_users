import React from "react";
import axios from "axios";

const deleteUser = ({ userId }) => {
  const handleDeleteUser = async () => {
    try {
      await axios.delete(`http://localhost:8080/users/${userId}`);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <button onClick={handleDeleteUser}>Delete</button>
    </div>
  );
};

export default deleteUser;
