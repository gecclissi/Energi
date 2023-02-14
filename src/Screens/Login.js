import React from "react";
import { Form, Button, Card, ButtonGroup } from "react-bootstrap";
import axiosInstance from "../myaxios";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [form, setform] = React.useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const signIn = async (e) => {
    e.preventDefault();
    const res = await axiosInstance.post("/auth/signIn", form);
    const data = await res.data;
    const token = data.token;
    localStorage.setItem("token", token);
    dispatch({ type: "LOGIN" });
    navigate("/Viewer");
    navigate("/User");
    navigate("/Dispositivos");
    navigate("/Device");
  };

  return (
    <div>
      <div
        class="col-8 col-sm-5 col-md-4 col-lg-4"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100vw",
          height: "80vh",
        }}
      >
        <Card
          border="primary"
          style={{ alignItems: "center", width: "21rem", height: "16rem" }}
        >
          <h2>LOGIN</h2>
          <Form style={{ width: "18rem" }}>
            <Form.Group controlId="email-id">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Digite seu email"
                value={form.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="password-id">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Digite sua senha"
                onChange={handleChange}
                value={form.password}
              />
            </Form.Group>
            <ButtonGroup
              style={{
                display: "flex",
                justifyContent: "center",
                width: "6rem",
                marginLeft: "6rem",
                marginTop: "0.9rem",
              }}
            >
              <Button onClick={signIn} variant="primary" type="submit">
                Logar
              </Button>
            </ButtonGroup>
          </Form>
          <hr />
        </Card>
      </div>
    </div>
  );
};

export default Login;
