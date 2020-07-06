import React from "react";
import "./MetCard.css";

import Card from "react-bootstrap/Card";

interface Props {
  item: {
    sol: string;
    season: string;
    at: { av: number; ct: number; mn: number; mx: number };
  };
}

const MetCard: React.FC<Props> = ({ item }) => {
  const fToC = (num: number) => {
    return (((num - 32) * 5) / 9).toFixed(0);
  };

  const estacoes = (str: string) => {
    if (str === "summer") {
      return "Verão";
    } else if (str === "winter") {
      return "Inverno";
    } else if (str === "fall") {
      return "Outono";
    } else if (str === "spring") {
      return "Primavera";
    }
  };

  return (
    <Card style={{ width: "12rem", height: "23rem" }}>
      <Card.Body>
        <Card.Title className="text-dark">Sol {item.sol}</Card.Title>
        <Card.Subtitle className="mb-1 text-muted">Marte</Card.Subtitle>
        <Card.Subtitle className="mb-1 text-muted">
          {"Estação " + estacoes(item.season)}
        </Card.Subtitle>
        <hr />
        <Card.Text
          className="text-dark"
          style={{ fontSize: "1.2rem", marginBottom: "2px" }}
        >
          Temperatura média
        </Card.Text>
        <Card.Text
          className="mb-1 text-muted"
          style={{ fontSize: "1.2rem", marginBottom: "2px" }}
        >
          {fToC(item.at.av) + "°C"}
        </Card.Text>
        <Card.Text
          className="text-dark"
          style={{ fontSize: "1.2rem", marginBottom: "2px" }}
        >
          Temperatura mínima
        </Card.Text>
        <Card.Text
          className="mb-1 text-muted"
          style={{ fontSize: "1.2rem", marginBottom: "2px" }}
        >
          {fToC(item.at.mn) + "°C"}
        </Card.Text>
        <Card.Text
          className="text-dark"
          style={{ fontSize: "1.2rem", marginBottom: "2px" }}
        >
          Temperatura máxima
        </Card.Text>
        <Card.Text
          className="mb-1 text-muted"
          style={{ fontSize: "1.2rem", marginBottom: "2px" }}
        >
          {fToC(item.at.mx) + "°C"}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MetCard;
