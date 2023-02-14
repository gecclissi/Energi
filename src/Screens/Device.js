import React, { useState, useEffect } from "react";
import { Form, Button, Col } from "react-bootstrap";
import MyModal from "../Layouts/MyModal";
import axiosInstance from "../myaxios";
import { useParams } from "react-router-dom";
import pix from "../images/pix.png";

const Device = (props) => {
  const [, setfeedBack] = useState(false);
  const [, setIsOk] = useState(false);

  const pathParam = useParams("id");
  const [user, setUser] = useState(null);

  const [form, setForm] = useState({ cep: "", numero: "", descricao: "" });
  const updateForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    console.log(form);
    try {
      const res = await axiosInstance.post("/users/device", form);

      await res.data;
      setfeedBack(true);
      setIsOk(true);
    } catch (ex) {
      console.log(ex);
      setfeedBack(true);
      setIsOk(false);
    }

    closeModal();
  };

  const loadUser = async (id) => {
    try {
      const res = await axiosInstance.get(`/users/${id}`);
      const user = await res.data;
      setForm({
        name: user.cep,
        numero: user.numero,
        descricao: user.descricao,
      });
      setUser(user);
    } catch (ex) {}
  };

  useEffect(() => {
    if (pathParam.id != null) loadUser(pathParam.id);
  }, []);

  // IMAGE PROCESSING
  // eslint-disable-next-line no-empty-pattern
  const [] = useState(null);
  // eslint-disable-next-line no-empty-pattern
  const [] = useState(null);

  const [showModal, setshowModal] = useState(false);

  const openModal = (user) => {
    setshowModal(true);
  };

  const closeModal = () => {
    setshowModal(false);
  };

  return (
    <>
      <Col sm={6} md={8}>
        <div style={{ flex: 1 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100vw",
              height: "80vh",
            }}
          >
            <Button
              style={{ alignItems: "center", width: "21rem", height: "16rem" }}
              variant="primary"
              onClick={() => openModal(user)}
            >
              <h2>Comprar Serviço Clique Aqui</h2>
              <i class="fa fa-plus" aria-hidden="true"></i>
            </Button>
          </div>
        </div>
      </Col>

      <MyModal
        showModal={showModal}
        handleCloseModal={closeModal}
        handleAddItem={submitForm}
        title="Comprar Serviço"
        confirmTitle="Fechar"
      >
        <Form.Group controlId="cep-id">
          <Form.Label>Cep</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite o cep"
            name="cep"
            onChange={updateForm}
            value={form.cep}
          />
        </Form.Group>
        <Form.Group controlId="numero-id">
          <Form.Label>Numero</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite o numero"
            name="numero"
            onChange={updateForm}
            value={form.numero}
          />
        </Form.Group>
        <Form.Group controlId="descricao-id">
          <Form.Label>Descriçao</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite uma descriçao"
            name="descricao"
            onChange={updateForm}
            value={form.descricao}
          />
        </Form.Group>
        <Form.Group
          controlId="pix-id"
          style={{
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            paddingTop: "10px",
          }}
        >
          <Form.Label style={{ aligntext: "center" }}>
            Efetuar compra via Pix{" "}
          </Form.Label>
          <img src={pix} style={{ width: 200, height: 200 }} />
          <Form.Label>
            Mande a confirmaçao via email: Tccfiecgsense@gmail.com
          </Form.Label>
        </Form.Group>
      </MyModal>
    </>
  );
};

export default Device;
