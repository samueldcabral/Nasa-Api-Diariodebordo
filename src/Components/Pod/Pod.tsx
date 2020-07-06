import React, { useState, useEffect } from "react";
import "./Pod.css";

import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";

import { getAPOD } from "../../Service/Api";

interface Props {
  setPagina: React.Dispatch<React.SetStateAction<string>>;
}

const Pod: React.FC<Props> = ({ setPagina }) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    getPod();
  }, []);

  const getPod = async () => {
    setLoading(true);
    const apod = await getAPOD();
    setLoading(false);
    setImageUrl(apod.data.url);
  };

  return (
    <Container
      className="display-4 text-light"
      style={{ zIndex: 2, display: "flex", flexDirection: "column" }}
    >
      <div
        className="h3 mt-5 text-center pod__subheader"
        style={{ color: "#fff" }}
      >
        Esta foi a sua última foto astronômica! Parabéns!
      </div>

      {loading ? (
        <Spinner animation="grow" />
      ) : (
        <img src={imageUrl} alt="foto astronomica" />
      )}
    </Container>
  );
};

export default Pod;
