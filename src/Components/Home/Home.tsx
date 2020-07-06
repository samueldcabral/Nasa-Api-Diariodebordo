import React, { useEffect } from "react";
import "./Home.css";

import { getAPOD, getInsight } from "../../Service/Api";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

interface Props {
  nome: string;
  setPagina: React.Dispatch<React.SetStateAction<string>>;
}

const Home: React.FC<Props> = ({ setPagina, nome }) => {
  useEffect(() => {
    console.log(getApiRequests());
  }, []);

  const getApiRequests = async () => {
    const apod = await getAPOD();
    const insight = await getInsight();

    const result = {
      apod: apod.data,
      insight: insight.data,
    };
    return result;
  };

  return (
    <Container className="display-4 text-light" style={{ zIndex: 2 }}>
      <Row>
        <Col>
          <div className="h3 mt-5 home__subheader" style={{ color: "#fff" }}>
            {nome}, Aqui você poderá ver os seus últimos diários de bordo e
            baixar suas últimas fotos astronomicas
          </div>
        </Col>
      </Row>

      <Row style={{ marginTop: "5rem" }}>
        <Col className="d-flex justify-content-around">
          <Button
            className="home__action-btn"
            variant="primary"
            onClick={() => setPagina("meteorologia")}
          >
            Ver meus diários
          </Button>
          <Button
            className="home__action-btn"
            variant="primary"
            onClick={() => setPagina("pod")}
          >
            Ver foto astronômica
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
