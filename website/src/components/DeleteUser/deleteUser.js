import React, { useState } from "react";
import axios from "axios";
import DeleteConfirmation from "../DeleteConfirmation/deleteConfirmation";
import { Alert } from "react-bootstrap";
import "./deleteUser.css";

const deleteUser = ({ userId, name }) => {
  const [displayConfirmationModal, setDisplayConfirmationModal] = useState(
    false
  );
  const [deleteMessage, setDeleteMessage] = useState(null);
  const [deleteSuccessMsg, setDeleteSuccessMsg] = useState(null);

  // Handle the displaying of the modal based on id
  const showDeleteModal = () => {
    setDeleteSuccessMsg(null);
    setDeleteMessage(`Are you sure you want to delete the user '${name}'?`);
    setDisplayConfirmationModal(true);
  };

  // Hide the modal
  const hideConfirmationModal = () => {
    setDisplayConfirmationModal(false);
  };

  // Handle the actual deletion of the item
  const submitDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/users/${userId}`);
    } catch (err) {
      console.log(err);
    }
    setDeleteMessage(`user ${name} was deleted successfully.`);
    setDeleteSuccessMsg(`user ${name} was deleted successfully.`);
    setDisplayConfirmationModal(false);
  };
  return (
    <div className="back-color">
      {deleteSuccessMsg && <Alert variant="success">{deleteSuccessMsg}</Alert>}
      <button className="btn_delete back-color" onClick={showDeleteModal}>
        Delete
      </button>
      {/* sending data to DeleteConfirmation component for deleting */}
      <DeleteConfirmation
        showModal={displayConfirmationModal}
        confirmModal={submitDelete}
        hideModal={hideConfirmationModal}
        id={userId}
        message={deleteMessage}
      />
    </div>
  );
};

export default deleteUser;
