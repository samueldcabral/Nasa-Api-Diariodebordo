import React from "react";
import "./Navbar.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { IoMdArrowRoundBack } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";

interface Props {
  pagina: string;
  setPagina: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar: React.FC<Props> = ({ pagina, setPagina }) => {
  const handleClick = () => {
    if (pagina === "meteorologia") {
      setPagina("home");
    }
    if (pagina === "diarios") {
      setPagina("meteorologia");
    } else if (pagina === "pod") {
      setPagina("home");
    }
  };

  const handleHomeClick = () => {
    setPagina("started");
  };

  return (
    <>
      <Row>
        <Col>
          <div className="navbar__h1">
            Bem vindo ao seu diário austronáutico de bordo!
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-between">
          <Button
            className="navbar__btn"
            variant="outline-light"
            disabled={
              pagina === "home" ? true : pagina === "started" ? true : false
            }
            onClick={handleClick}
          >
            <IoMdArrowRoundBack
              style={{ fontSize: "1.5rem", marginBottom: "2px" }}
            />
            Voltar
          </Button>
          <Button
            className="navbar__btn"
            variant="outline-light"
            onClick={handleHomeClick}
          >
            <AiOutlineHome
              style={{
                fontSize: "1.5rem",
                marginBottom: "2px",
                marginRight: "2px",
              }}
            />
            Página Inicial
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Navbar;
