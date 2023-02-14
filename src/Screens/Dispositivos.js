import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import DeviceProfile from "../Layouts/DeviceProfile";
import axiosInstance from "../myaxios";
import { useSelector } from "react-redux";

const Dispositivos = (props) => {
  useSelector((state) => state.count);

  const [user, setUser] = useState(null);

  const getUserById = async () => {
    const res = await axiosInstance.get(`/users/my`);
    const user = await res.data;
    setUser(user);
  };

  const [devices, setDevice] = useState(null);

  const getDeviceById = async () => {
    const res = await axiosInstance.get(`/device/my`);
    const devices = await res.data;
    setDevice(devices);
  };
  useEffect(() => {
    getDeviceById();
    getUserById();
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexFlow: "row wrap",
        }}
      >
        {devices != null
          ? devices.map((d, i) => (
              <Card
                key={i}
                border="primary"
                bg={"primary"}
                style={{
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  width: "21rem",
                  height: "25rem",
                  marginRight: "3rem",
                  marginTop: "15vh",
                  marginLeft: "3rem",
                }}
              >
                <Card.Header>
                  <h5>Device</h5>
                </Card.Header>
                <Card.Body>
                  <Card.Title>Device de</Card.Title>
                  <DeviceProfile
                    id={user ? user.name : ""}
                    deviceNumber={d ? d.deviceNumber : ""}
                  />
                </Card.Body>
                <Card.Footer
                  style={{
                    width: "21rem",
                    textAlign: "right",
                    marginBottom: "0.5rem",
                  }}
                  class="d-flex justify-content-around"
                >
                  <Button variant="success">
                    <Link
                      to={`/Viewer/${d.deviceId}`}
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Visualizar
                    </Link>
                  </Button>
                </Card.Footer>
              </Card>
            ))
          : null}
      </div>
    </>
  );
};

export default Dispositivos;
