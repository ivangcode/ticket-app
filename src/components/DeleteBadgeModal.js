import React from "react";

import Modal from "./Modal";
// import "./styles/DeleteBadgeModal.css";

function DeleteBadgeModal(props) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div className="DeleteBadgeModal">
        <h3>Are you sure?</h3>
        <p>You're about to delete this badge.</p>
        <button onClick={props.onDeleteBadge} className="btn btn-danger">
          Delete
        </button>
        <button onClick={props.onClose} className="btn btn-primary">
          Cancel
        </button>
      </div>
    </Modal>
  );
}

export default DeleteBadgeModal;
