import React from "react";

import { Container, LinkBack } from "./style";

export default function Login() {
  function handleSubmit(e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let cep = document.getElementById("cep").value;
    let datanasc = document.getElementById("datanasc").value;

    const data = {
      name,
      email,
      address,
      cep,
      datanasc,
    };

    let dataConverted = JSON.stringify(data);

    localStorage.setItem("dados-cadastro", dataConverted);
    alert("Cadastro efetuado com sucesso!");
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input
          id="name"
          type="text"
          aria-label="Nome Completo"
          placeholder="Nome Completo"
        />

        <input 
          id="email" 
          type="email" 
          aria-label="E-mail" 
          placeholder="E-mail"
        />

        <input
          id="address"
          type="text"
          aria-label="Endereço (País, Estado, Cidade, Bairro, Rua, Número)"
          placeholder="Endereço (País, Estado, Cidade, Bairro, Rua, Número)"
        />

        <input 
          id="cep" 
          type="text" 
          aria-label="CEP" 
          placeholder="CEP"
        />

        <input
          id="datanasc"
          type="date"
          aria-label="Data de Nascimento"
          />

        <button type="submit">Cadastrar</button>
        <LinkBack to="/">Home</LinkBack>
      </form>
    </Container>
  );
}
