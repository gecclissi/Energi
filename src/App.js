import React, { useState, useEffect } from "react";
import Login from "./Screens/Login";
import Registro from "./Screens/Registro";
import Home from "./Screens/Home";
import { Route, Routes, Outlet } from "react-router-dom";
import Header from "./Screens/Header";
import Dashboard from "./Screens/Dashboard";
import User from "./Screens/User";
import Device from "./Screens/Device";
import Dispositivos from "./Screens/Dispositivos";
import Viewer from "./Screens/Viewer";

import { Button, Toast } from "react-bootstrap";
import { onMessageListener, requestForToken } from "./firebase";

import { useSelector } from "react-redux";

const App = () => {
  const [fcmToken, setToken] = useState(null);
  const [notification, setNotification] = useState(null);
  const [isTokenFound, setTokenFound] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    requestForToken(setTokenFound, setToken);
  }, []);

  onMessageListener()
    .then((payload) => {
      setShow(true);
      setNotification({
        title: payload.notification.title,
        body: payload.notification.body,
      });
      console.log(payload);
    })
    .catch((err) => console.log("failed: ", err));

  const loggedIn = useSelector((state) => state.loggedIn);

  return (
    // retorna a  pagina ou porção que serah mostrada
    <div>
      <Toast
        onClose={() => setShow(fcmToken && fcmToken.notification)}
        show={show}
        delay={3000}
        autohide
        animation
        style={{
          position: "absolute",
          top: 20,
          right: 20,
        }}
      >
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto">
            {notification && notification.title}
          </strong>
        </Toast.Header>
        <Toast.Body>{notification && notification.body}</Toast.Body>
        <Button onClick={() => setShow(false)}>Close Notification</Button>
        <br />
      </Toast>

      <Routes>
        {loggedIn ? (
          <>
            <Route
              exact
              path="/User"
              element={
                <>
                  <Dashboard />
                  <User />
                </>
              }
            />
            <Route
              path="/Dispositivos"
              element={
                <>
                  <Dashboard />
                  <Dispositivos />
                </>
              }
            />
            <Route
              path="/Device"
              element={
                <>
                  <Dashboard />
                  <Device />
                </>
              }
            />
            <Route
              path="/Viewer/:id"
              element={
                <>
                  <Dashboard />
                  <Viewer />
                </>
              }
            />
          </>
        ) : (
          <>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Home />
                </>
              }
            />
            <Route
              exact
              path="/Login"
              element={
                <>
                  <Header />
                  <Login token={fcmToken} />
                </>
              }
            />
            <Route
              exact
              path="/Registro"
              element={
                <>
                  <Header />
                  <Registro />
                </>
              }
            />
          </>
        )}
      </Routes>
      <Outlet />
    </div>
  );
};

export default App;
