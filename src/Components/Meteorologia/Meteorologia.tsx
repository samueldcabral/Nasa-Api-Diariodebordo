import React from "react";
import "./Meteorologia.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import Previsao from "../Previsao/Previsao";

interface Props {
  setPagina: React.Dispatch<React.SetStateAction<string>>;
}

const Meteorologia: React.FC<Props> = ({ setPagina }) => {
  return (
    <>
      <Row>
        <Col>
          <div className="h3 mt-5 diarios__subheader" style={{ color: "#fff" }}>
            Lembre-se de registrar as condições meteorológicas!
          </div>
        </Col>
      </Row>
      <Previsao />
      <Row>
        <Col>
          <div className="text-light text-right">Fonte: www.nasa.gov</div>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-2">
          <Button variant="primary" onClick={() => setPagina("diarios")}>
            Ver meus diários
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Meteorologia;
