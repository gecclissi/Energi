import React from "react";
import { Container, Col } from "react-bootstrap";

const UserProfile = (props) => {
  "Ola@mail.com";
  return (
    <div>
      <Container>
        <h1>
          <center>
            {props.name}
            {props.id}
          </center>
        </h1>
        <hr />
        <br />

        <Col xs={8} md={8}></Col>
        <Col md={40}>
          Email : {props.email} <br />
          <br />
          Telefone: {props.phoneNumber}
        </Col>
      </Container>
    </div>
  );
};

export default UserProfile;
