import React, { useState } from "react";
import { Nav, Navbar, Offcanvas, Button } from "react-bootstrap";
import gsense2 from "../images/gsense2.png";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const Dashboard = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="light" variant="light">
        <Nav className="mr-auto">
          <Nav.Link href="#">
            <Button
              variant="primary"
              onClick={handleShow}
              style={{ left: "50px" }}
            >
              <i class="fa fa-bars" aria-hidden="true"></i>
            </Button>
          </Nav.Link>
          <Navbar.Brand
            href="/"
            style={{ position: "absolute", right: "50px" }}
          >
            <Col>
              <img src={gsense2} style={{ width: 50, height: 60 }} />
            </Col>{" "}
          </Navbar.Brand>
        </Nav>
      </Navbar>

      <Offcanvas
        style={{ width: 250 }}
        show={show}
        onHide={handleClose}
        responsive="lg"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>
            {" "}
            <Nav.Link href="#">
              <Link
                to={"/Dispositivos"}
                style={{ color: "black", textDecoration: "none" }}
              >
                <i class="fa fa-microchip" aria-hidden="true"></i> Meu
                Dispositivo{" "}
              </Link>{" "}
            </Nav.Link>{" "}
          </p>
          <p>
            {" "}
            <Nav.Link href="#">
              <Link
                to={"/Device"}
                style={{ color: "black", textDecoration: "none" }}
              >
                <i class="fa fa-shopping-cart" aria-hidden="true"></i> Comprar
                Serviço{" "}
              </Link>{" "}
            </Nav.Link>{" "}
          </p>
          <p style={{ bottom: "50px" }}>
            <Nav.Link href="#">
              <Link
                to={"/User"}
                style={{ color: "black", textDecoration: "none" }}
              >
                <i class="fa fa-user" aria-hidden="true"></i> Meu Usuario{" "}
              </Link>{" "}
            </Nav.Link>{" "}
          </p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Dashboard;
