/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import device1 from "../images/device1.png";
import device2 from "../images/device2.png";

const Home = () => {
  return (
    <>
      <CardGroup style={{ display: "flow" }}>
        <Card bg="primary" className="text-center" style={{ width: "flex" }}>
          <Card.Body class="text-white">
            <br />
            <Card.Title className="fs-1">Device</Card.Title>
            <Card.Subtitle>Imagens ilustrativas</Card.Subtitle>
            <img src={device2} style={{ width: 250, height: 400 }} />
            <Card.Text>Imagem do Sensor</Card.Text>
            <br />
            <br />
            <img src={device1} style={{ width: 250, height: 400 }} />
            <Card.Text>Imagem do Dispositivo</Card.Text>
          </Card.Body>
        </Card>
        <Card className="text-center" style={{ width: "flex" }}>
          <Card.Body>
            <Card.Title className="fs-1">Sobre G-SENSE</Card.Title>
            <br />
            <br />
            <Card.Text
              className="fs-4"
              style={{ textAlign: "justify", margin: "15px" }}
            >
              Partimos à pesquisa de um dispositivo capaz de ler assinaturas de
              gás e como fazer a relação máquina-homem capaz de indicar ao
              usuário possíveis falhas na infraestrutura de sua residência bem
              como na própria instalação e manutenção de soluções gasosas:
              aprender uma nova linguagem de programação que possibilite
              transformar leituras de dispositivos em uma notificação objetiva e
              de baixa latência.
            </Card.Text>
            <br />
            <iframe width="100%"
              height="400px" src="https://www.youtube.com/embed/boMEpjzfGBs"
             title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
           
          </Card.Body>
        </Card>
      </CardGroup>
      <Card className="text-center" style={{ width: "flex" }}>
        <Card.Body>
          <Card.Text className="fs-9" style={{ textAlign: "center" }}>
            Email para contato
            <br />
            Tccfiecgsense@gmail.com
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Home;
