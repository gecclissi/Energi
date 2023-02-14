/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { Form, Button, Card, ButtonGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { BACKEND_URL } from "../constants";
import FeedBack from "../Layouts/FeedBack";
import axiosInstance from "../myaxios";

const Registro = (props) => {
  const [feedBack, setfeedBack] = useState(false);
  const [isOk, setIsOk] = useState(false);

  const pathParam = useParams("id");
  const [user, setUser] = useState(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    cpfOuCnpj: "",
    userRole: 0,
  });
  const updateForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      if (!pathParam.id) {
        const res = await axiosInstance.post("/auth/signUp", form);

        await res.data;
        setfeedBack(true);
        setIsOk(true);
      } else {
        const res = await axiosInstance.put(`/users/${pathParam.id}`, form);

        await res.data;
        setfeedBack(true);
        setIsOk(true);
        setTimeout(() => setfeedBack(false), 1000);
      }
    } catch (ex) {
      console.log(ex);
      setfeedBack(true);
      setIsOk(false);
    }
  };

  const loadUser = async (id) => {
    try {
      const res = await axiosInstance.get(`/users/${id}`);
      const user = await res.data;
      setForm({
        name: user.name,
        email: user.email,
        phoneNumber: user.phoneNumber,
        password: user.password,
        cpfOuCnpj: user.cpfOuCnpj,
        userRole: user.userRole,
      });
      setUser(user);
    } catch (ex) {}
  };

  const submitImageForUser = async (id) => {
    try {
      const formData = new FormData();
      formData.append("image", file);
      const res = await axiosInstance.put(`/users/image/${id}`, formData);
      await res.data;
    } catch (ex) {}
  };

  useEffect(() => {
    if (pathParam.id != null) loadUser(pathParam.id);
  }, []);

  // IMAGE PROCESSING
  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(null);

  const changeHandler = (e) => {
    const file = e.target.files[0];

    setFile(file);
    if (file) {
      let fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result) {
          setFileDataURL(result);
        }
      };
      fileReader.readAsDataURL(file);
    }
  };

  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100vw",
          height: "90vh",
        }}
      >
        <Card
          border="primary"
          style={{ alignItems: "center", width: "21rem", height: "35rem" }}
        >
          {feedBack ? (
            <FeedBack isOk={isOk} closeFeedBack={setfeedBack}>
              <div>a</div>
            </FeedBack>
          ) : null}

          <h2>{pathParam.id == null ? "REGISTRO" : "Edit User"} </h2>
          <Form style={{ width: "18rem" }}>
            <Card
              border="black"
              style={{ alignItems: "center", height: "27px" }}
            >
              {["radio"].map((type) => (
                <div key={`reverse-${type}`} className="mb-3">
                  <Form.Check
                    defaultChecked={true}
                    onChange={handleShow}
                    inline
                    label="Fisico"
                    name="group1"
                    type={type}
                    id={`reverse-${type}-1`}
                  />
                  <Form.Check
                    onChange={handleClose}
                    inline
                    label="Juridico"
                    name="group1"
                    type={type}
                    id={`reverse-${type}-2`}
                  />
                </div>
              ))}
            </Card>
            <Form.Group controlId="name-id">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o seu nome"
                name="name"
                onChange={updateForm}
                value={form.name}
              />
            </Form.Group>
            <Form.Group controlId="email-id">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Digite o seu email"
                name="email"
                onChange={updateForm}
                value={form.email}
              />
            </Form.Group>
            <Form.Group controlId="password-id">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                placeholder="Digite sua senha no minimo 6 digitos"
                name="password"
                onChange={updateForm}
                value={form.password}
              />
            </Form.Group>
            <Form.Group controlId="password2-id">
              <Form.Label>Confirme sua Senha</Form.Label>
              <Form.Control
                type="password"
                placeholder="Digite sua senha "
                name="password"
              />
            </Form.Group>
            <Form.Group controlId="phone-id">
              <Form.Label>Telefone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o seu Telefone"
                name="phoneNumber"
                onChange={updateForm}
                value={form.phoneNumber}
              />
            </Form.Group>
            {show ? (
              <Form.Group controlId="cpf-id" onChange={setShow}>
                <Form.Label>CPF</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Digite o seu cpf"
                  name="cpfOuCnpj"
                  onChange={updateForm}
                  value={form.cpfOuCnpj}
                />
              </Form.Group>
            ) : (
              <Form.Group controlId="cnpj-id" onChange={setShow}>
                <Form.Label>CNPJ</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Digite o seu cnpj"
                  name="cpfOuCnpj"
                  onChange={updateForm}
                  value={form.cpfOuCnpj}
                />
              </Form.Group>
            )}

            <ButtonGroup
              style={{
                display: "flex",
                justifyContent: "center",
                width: "6rem",
                marginLeft: "6rem",
                marginTop: "0.9rem",
              }}
            >
              <Button variant="primary" onClick={submitForm}>
                {pathParam.id ? "Edit User" : "Registrar"}
              </Button>
            </ButtonGroup>
          </Form>
        </Card>
        {pathParam.id != null ? (
          <div>
            <h2> Imagem </h2>
            <Form>
              <div>
                <img
                  src={
                    fileDataURL == null
                      ? user != null && user.profileImage != null
                        ? `${BACKEND_URL}/images/${user.profileImage}.jpg`
                        : ""
                      : fileDataURL
                  }
                  width={300}
                  className="img-fluid rounded-circle"
                />
              </div>
              <Form.Control onChange={changeHandler} type="file" />

              <Button
                variant="success"
                onClick={() => submitImageForUser(pathParam.id)}
              >
                Submeter Imagem
              </Button>
            </Form>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Registro;

/*
<Form.Group  controlId="cnpj-id" >
    <Form.Label>CNPJ</Form.Label>
    <Form.Control type="text" placeholder="Coloque o seu cnpj" name="cpfoucnpj" onChange={updateForm} value={form.cpfoucnpj} />
</Form.Group>
 
*/
