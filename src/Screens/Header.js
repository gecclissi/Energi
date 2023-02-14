/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import gsense from "../images/gsense.png";
import Col from "react-bootstrap/Col";

const Header = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container className="mycontainerfluid">
          <Navbar.Brand href="/">
            <Col>
              <img src={gsense} style={{ width: 130, height: 60 }} />
            </Col>{" "}
          </Navbar.Brand>
          <Nav className="navbar-nav mx-auto">
            <Nav.Link href="#">
              <Link to={"/"} style={{ color: "black", textDecoration: "none" }}>
                <h4>Home</h4>
              </Link>
            </Nav.Link>
            <Nav.Link href="Login">
              <Col
                to={"/Login"}
                style={{ color: "black", textDecoration: "none" }}
              >
                <h4>Login</h4>
              </Col>
            </Nav.Link>
            <Nav.Link href="#">
              <Link
                to={"/Registro"}
                style={{ color: "black", textDecoration: "none" }}
              >
                <h4>Registro</h4>
              </Link>
            </Nav.Link>
          </Nav>
          <div style={{ width: 135, height: 60 }}></div>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
