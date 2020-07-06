import React from "react";
import "./GetStarted.css";
import Astronauta from "../../Assets/austronaut.png";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

interface Props {
  nome: string;
  setNome: React.Dispatch<React.SetStateAction<string>>;
  setPagina: React.Dispatch<React.SetStateAction<string>>;
}

const GetStarted: React.FC<Props> = ({ nome, setNome, setPagina }) => {
  const handleSubmit = () => {
    if (nome === "") {
      alert("Digite o seu nome, austronauta");
    } else {
      setPagina("home");
    }
  };

  const handleKeyDown = (e: string) => {
    if (Number(e) === 13) {
      handleSubmit();
    }
  };

  return (
    <>
      <img
        src={Astronauta}
        alt="astronauta"
        style={{
          position: "absolute",
          width: "15%",
          left: "0",
          // marginLeft: "10%",
        }}
      />
      <Container className="display-4 text-light" style={{ zIndex: 2 }}>
        <Row>
          <Col>
            <div className="h3 mt-5" style={{ color: "#fff" }}>
              Estamos no ano de 2077, você é um jovem explorador selecionado na
              missão Apollo X-40 para explorar Marte! Um planeta fascinante.
              Este é um local para você registrar seus pensamentos de viagem e
              registar os dados meteorológicos com seu equipamento.
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex flex-column">
            <div className="h3 mt-5" style={{ color: "#fff" }}>
              Antes de começar, qual é o seu nome?
            </div>
            <InputGroup className="mb-3 mt-5">
              <FormControl
                placeholder="Digite seu nome, Astrounauta!"
                aria-label="Astrounauta's username"
                aria-describedby="basic-addon2"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                onKeyDown={(e: { keyCode: any }) => handleKeyDown(e.keyCode)}
                style={{ fontSize: "1.5rem" }}
              />
            </InputGroup>
            <Button
              variant="primary"
              style={{
                fontSize: "1.5rem",
                width: "50%",
                margin: "auto",
              }}
              onClick={handleSubmit}
            >
              Vamos Começar!
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default GetStarted;
