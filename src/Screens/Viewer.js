import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import axiosInstance from "../myaxios";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Viewer = (props) => {
  useSelector((state) => state.count);
  const pathParam = useParams("id");

  const [device, setDevice] = useState(null);

  const getDeviceById = async () => {
    const res = await axiosInstance.get(`/device/${pathParam.id}`);
    const device = await res.data;
    setDevice(device);
  };
  useEffect(() => {
    const interval = setInterval(() => getDeviceById(), 10000);
    return () => clearInterval(interval);
  }, []);

  const deleteDeviceById = async () => {
    const res = await axiosInstance.get(`/device/${pathParam.id}`);
    await res.data;
    await axiosInstance.delete(`/device/${pathParam.id}`);
    alert("Serviço cancelado!");
  };

  return (
    <>
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
          bg={"primary"}
          style={{
            color: "white",
            alignItems: "center",
            textAlign: "center",
            width: "21rem",
            height: "25rem",
          }}
        >
          <Card.Header>
            <h5>Device {device ? device.deviceId : ""}</h5>
          </Card.Header>
          <Card.Body>
            <Card.Title>Status de Vazamento</Card.Title>
            <h1>{device != null && device.status === 1 ? "Vazando" : "Ok"}</h1>
          </Card.Body>
          <Card.Footer
            style={{
              width: "21rem",
              textAlign: "right",
              marginBottom: "0.5rem",
            }}
            class="d-flex justify-content-around"
          >
            <Button variant="danger" onClick={deleteDeviceById}>
              Cancelar Serviço
            </Button>
          </Card.Footer>
        </Card>
      </div>
    </>
  );
};

export default Viewer;
