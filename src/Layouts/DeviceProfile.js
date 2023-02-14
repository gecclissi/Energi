import React from "react";
import { Container, Col } from "react-bootstrap";

const DeviceProfile = (props) => {
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
          <h4>
            Número:
            <br /> {props.deviceNumber}
          </h4>
        </Col>
      </Container>
    </div>
  );
};

export default DeviceProfile;
