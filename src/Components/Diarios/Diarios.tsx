import React, { useState } from "react";
import "./Diarios.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { v4 as uuidv4 } from "uuid";
import { GrFormClose } from "react-icons/gr";
import { GrFormEdit } from "react-icons/gr";

import { entradaDiarios } from "../../Service/DiarioState";

interface Props {
  setPagina: React.Dispatch<React.SetStateAction<string>>;
}

export interface Diarioint {
  id: string;
  titulo: string;
  corpo: string;
  data: Date;
}

const Diarios: React.FC<Props> = () => {
  const [idDiario, setIdDiario] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [diarios, setDiarios] = useState<Diarioint[]>(entradaDiarios);
  const [titulo, setTitulo] = useState("");
  const [corpo, setCorpo] = useState("");

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleSalvar = () => {
    if (titulo === "" || corpo === "") {
      alert("Digite um titulo ou corpo");
    } else if (idDiario) {
      let diarioNovo = diarios.find((diario) => diario.id === idDiario);

      if (diarioNovo) {
        let newDiarioss = diarioNovo;
        newDiarioss.corpo = corpo;
        newDiarioss.titulo = titulo;
        let diariosNovos: Diarioint[] = diarios.map((diario) =>
          diario.id === idDiario ? newDiarioss : diario
        );

        setDiarios(diariosNovos);
        handleClose();
      }
    } else {
      setDiarios((diario) => [
        ...diario,
        { id: uuidv4(), titulo, corpo, data: new Date() },
      ]);
      setTitulo("");
      setCorpo("");
      handleClose();
    }
  };

  const handleDelete = (id: string) => {
    const newDiarios = diarios.filter((diario) => diario.id !== id);
    setDiarios(newDiarios);
  };

  const handleEdite = (id: string) => {
    let diario = diarios.find((diario) => diario.id === id);
    setTitulo(diario!.titulo);
    setCorpo(diario!.corpo);
    setIdDiario(id);
    handleShow();
  };

  return (
    <>
      <Button variant="primary" className="mt-5" onClick={handleShow}>
        Adicionar nova entrada no diário
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Vamos lá! Digite abaixo seus pensamentos...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Título do diário</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o seu título..."
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
              <Form.Control type="hidden" value={idDiario} />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Digite o corpo...</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Digite o corpo"
                value={corpo}
                onChange={(e) => setCorpo(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleSalvar}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>

      {diarios.map((diario) => {
        let str = diario.data.toUTCString();
        return (
          <Row key={diario.id} className="mt-2">
            <Col>
              <Accordion>
                <Card>
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="0"
                    style={{
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <b>Título:</b>
                      {" " + diario.titulo}{" "}
                    </div>
                    <span className="text-muted" style={{ fontSize: "0.8rem" }}>
                      clique em mim para expandir...
                    </span>
                    <div>
                      <button
                        style={{
                          background: "none",
                          border: "none",
                          outline: "none",
                          zIndex: 3,
                        }}
                        onClick={() => handleEdite(diario.id)}
                      >
                        <GrFormEdit />
                      </button>
                      <button
                        style={{
                          background: "none",
                          border: "none",
                          outline: "none",
                          zIndex: 3,
                        }}
                        onClick={() => handleDelete(diario.id)}
                      >
                        <GrFormClose />
                      </button>
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body className="d-flex flex-column">
                      {diario.corpo}

                      <span className="text-dark text-muted"> {str}</span>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>
          </Row>
        );
      })}
    </>
  );
};

export default Diarios;
