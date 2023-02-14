import React from "react";
import { Modal, Button } from "react-bootstrap";

const MyModal = (props) => {
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
          Comprar
        </Button>
        <Button variant="danger" onClick={props.handleCloseModal}>
          {props.confirmTitle}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyModal;
