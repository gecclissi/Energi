import React, { useState, useEffect } from "react";
import { Form, Button, Card } from "react-bootstrap";
import UserProfile from "../Layouts/UserProfile";
import axiosInstance from "../myaxios";
import { useSelector } from "react-redux";
import EditUser from "../Layouts/EditUser";
import { useParams } from "react-router-dom";

const User = () => {
  useSelector((state) => state.count);

  const [user, setUser] = useState(null);

  const getUserById = async () => {
    const res = await axiosInstance.get(`/users/my`);
    const user = await res.data;
    setUser(user);
  };
  useEffect(() => {
    getUserById();
  }, []);

  useParams("id");

  const [showModal, setshowModal] = useState(false);

  const openModal = (user) => {
    setshowModal(true);
  };

  const closeModal = async () => {
    setshowModal(false);
  };

  const [form, setForm] = useState({ name: "", password: "", phoneNumber: "" });

  const submitForm = async (e) => {
    e.preventDefault();
    console.log(form);

    try {
      const res = await axiosInstance.put(`/users/${user.id}`, form);
      await res.data;
      setfeedBack(true);
      setIsOk(true);
    } catch (ex) {
      console.log(ex);
      setfeedBack(true);
      setIsOk(false);
    }
    closeModal();
    alert("Usuário alterado com sucesso, aguarde um momento!");
  };
  useEffect(() => {
    const interval = setInterval(() => getUserById(), 10000);
    return () => clearInterval(interval);
  }, []);
  const [, setfeedBack] = useState(false);
  const [, setIsOk] = useState(false);
  const updateForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100vw",
          height: "90vh",
        }}
      >
        <Card
          border="primary"
          bg={"primary"}
          style={{
            color: "white",
            alignItems: "center",
            width: "21rem",
            height: "20rem",
          }}
        >
          <h2>SUA CONTA</h2>
          <Form style={{ width: "18rem" }}>
            <UserProfile
              id={user ? user.name : ""}
              phoneNumber={user ? user.phoneNumber : ""}
              email={user ? user.email : ""}
            />
          </Form>
          <Button
            className="alttel"
            style={{ color: "white", position: "absolute", bottom: 10 }}
            variant="primary"
            onClick={() => openModal(user)}
          >
            Alterar Usuario
          </Button>
        </Card>
      </div>
      <EditUser
        showModal={showModal}
        handleCloseModal={closeModal}
        handleAddItem={submitForm}
        title="Alterar Usuário"
        confirmTitle="Deletar Usuário"
      >
        <Form.Group controlId="nome-id">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite o nome"
            name="name"
            onChange={updateForm}
            value={form.name}
          />
        </Form.Group>
        <Form.Group controlId="senha-id">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Digite o senha"
            name="password"
            onChange={updateForm}
            value={form.password}
          />
        </Form.Group>
        <Form.Group controlId="telefone-id">
          <Form.Label>Telefone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite uma telefone"
            name="phoneNumber"
            onChange={updateForm}
            value={form.phoneNumber}
          />
        </Form.Group>
      </EditUser>
    </>
  );
};

export default User;
