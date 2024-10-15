import "primeicons/primeicons.css";
import "./style.css";
import React, { Fragment, useState } from "react";
import Modal from "./components/modal/index.js";

import api from "./services/api.js";

function App() {
  const [input, setInput] = useState("");
  const [cep, setCep] = useState({});
  const [modal, setModal] = useState(false);

  async function handleSearch() {
    if (input === "") {
      alert("Preencha algum cep!");
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setModal(true);
      setInput("");
    } catch {
      alert("Erro ao buscar o CEP");
      setInput("");
    }
  }

  const handleInput = (e) => setInput(e.target.value);

  const closeModal = () => {
    setModal(false);
  };

  return (
    <Fragment>
      <div className="container">
        <h1>Buscador de CEP</h1>
        <div className="containerSearch">
          <input
            type="text"
            placeholder="Digite seu CEP"
            value={input}
            onChange={handleInput}
          />

          <button type="button" className="buttonSearch" onClick={handleSearch}>
            <span className="pi pi-search"></span>
          </button>
        </div>
        <div></div>
      </div>
      <Modal
        cep={cep.cep}
        logradouro={cep.logradouro}
        bairro={cep.bairro}
        localidade={cep.localidade}
        estado={cep.estado}
        regiao={cep.regiao}
        isOpen={modal}
        closeModal={closeModal}
      />
    </Fragment>
  );
}

export default App;
