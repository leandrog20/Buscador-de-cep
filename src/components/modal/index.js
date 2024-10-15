import React from "react";
import "./style.css";
import "primeicons/primeicons.css";
const Modal = (props) => {
  if (props.isOpen) {
    return (
      <div className="containerModal">
        <div>
          <div className="header">
            <p>Informações sobre o CEP</p>
            <button onClick={props.closeModal}>
              <i className="pi pi-times"></i>
            </button>
          </div>

          <div className="main">
            <span className="cep">CEP: {props.cep}</span>
            <span>Rua: {props.logradouro}</span>
            <span>Bairro: {props.bairro}</span>
            <span>Cidade: {props.localidade}</span>
            <span>Estado: {props.estado}</span>
            <span>Região: {props.regiao}</span>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default Modal;
