import React from "react";
import { Modal, Button } from "react-bootstrap";
const EditUser = (props) => {
  return (
    <Modal centered show={props.showModal} onHide={props.handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{props.children}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={props.handleAddItem}>
          Editar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditUser;
