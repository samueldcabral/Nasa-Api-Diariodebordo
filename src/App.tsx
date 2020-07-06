import React, { useState } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import Meteorologia from "./Components/Meteorologia/Meteorologia";
import Pod from "./Components/Pod/Pod";
import Navbar from "./Components/Navbar/Navbar";
import GetStarted from "./Components/GetStarted/GetStarted";
import Diarios from "./Components/Diarios/Diarios";

const App: React.FC = () => {
  const [pagina, setPagina] = useState("diarios");
  const [nome, setNome] = useState("");
  return (
    <>
      <Navbar pagina={pagina} setPagina={setPagina} />
      {pagina === "started" && (
        <GetStarted nome={nome} setNome={setNome} setPagina={setPagina} />
      )}
      {pagina === "home" && <Home nome={nome} setPagina={setPagina} />}
      {pagina === "meteorologia" && <Meteorologia setPagina={setPagina} />}
      {pagina === "diarios" && <Diarios setPagina={setPagina} />}
      {pagina === "pod" && <Pod setPagina={setPagina} />}
    </>
  );
};

export default App;
