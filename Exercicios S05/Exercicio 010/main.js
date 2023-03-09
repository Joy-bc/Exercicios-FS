"use strict";

// Importação

import { cadastrarFilme } from "./Modules/filme";
import { buscar } from "./Modules/DOM.js";

// Variáveis

const container = document.getElementById("container");
const btnCadastrar = document.getElementById("botao-cadastrar");
const inputBuscar = document.getElementById("buscar");

// Ações

document
  .querySelector(".cadastro-de-filme form")
  .addEventListener("submit", (event) => event.preventDefault());

btnCadastrar.addEventListener("click", cadastrarFilme);
inputBuscar.addEventListener("keyup", buscar);
