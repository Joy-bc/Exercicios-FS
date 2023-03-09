"use strict";

// Importação
import * as icones from "./Modules/icons.js";

// Classes

class Filme {
  titulo;
  duracao;
  nota;
  favorito;
  assistido;
  img;

  constructor(titulo, duracao, nota) {
    this.titulo = titulo;
    this.duracao = Number(duracao);
    this.nota = Number(nota);
    this.favorito = false;
    this.assistido = false;
    this.img = "https://picsum.photos/id/237/250/200";
  }
}

// Variáveis

const container = document.getElementById("container");
const btnCadastrar = document.getElementById("botao-cadastrar");
const inputBuscar = document.getElementById("buscar");

window.filmesCadastrados = [];

// Ações

document
  .querySelector(".cadastro-de-filme form")
  .addEventListener("submit", (event) => event.preventDefault());

btnCadastrar.addEventListener("click", cadastrarFilme);
inputBuscar.addEventListener("keyup", buscar);

// Criação de funções

function cadastrarFilme() {
  let inputTitulo = document.getElementById("titulo");
  let inputDuracao = document.getElementById("duracao");
  let inputNota = document.getElementById("nota");

  const tituloRepetido = filmesCadastrados.filter(
    (filme) => filme.titulo == inputTitulo.value
  );

  const cadastroCompleto =
    inputTitulo.value.length > 0 &&
    inputDuracao.value > 0 &&
    inputNota.value > 0;

  if (tituloRepetido == "" && cadastroCompleto) {
    filmesCadastrados.push(
      new Filme(inputTitulo.value, inputDuracao.value, inputNota.value)
    );

    console.log(filmesCadastrados);

    window.alert(
      `O filme ${inputTitulo.value}, de duração de ${inputDuracao.value}min e nota ${inputNota.value} foi adicionado com sucesso!`
    );

    listarFilmes(filmesCadastrados);
  } else if (!cadastroCompleto) {
    window.alert("Alguma informação do filme está faltando!");
  } else {
    window.alert(`O filme ${inputTitulo.value} já foi cadastrado!`);
  }

  inputTitulo.value = "";
  inputDuracao.value = "";
  inputNota.value = "";
}

function listarFilmes() {
  const filme = filmesCadastrados[filmesCadastrados.length - 1];

  criarCards(filme);
}

function buscar() {
  let busca = document.getElementById("buscar");

  let resultadoDaBusca = filmesCadastrados.filter((filme) =>
    filme.titulo.toLowerCase().includes(busca.value.toLowerCase())
  );
  if (resultadoDaBusca.length > 0) {
    container.innerHTML = "";

    resultadoDaBusca.forEach((resultado) => {
      criarCards(resultado);
    });
  } else {
    alert("Não foi encontrado nenhum filme com esse titulo");
  }
}

function criarCards(filme) {
  container.insertAdjacentHTML(
    "beforeend",
    `
      <div class="divCard" id="${filme.titulo
        .toLowerCase()
        .replaceAll(" ", "-")}">
      <div class="divFoto"> <img src="${filme.img}" alt="Foto do Filme"></div>
      <div class="divConteudo">
        <div class="divNota">${filme.nota}</div>
        <div class="divDuracao">${filme.duracao}</div>
        <div class="divTitulo">${filme.titulo}</div>
        <div><button class="botao-assistido" onclick="atualizarFilme('${
          filme.titulo
        }', 'assistido')">
        ${filme.assistido ? icones.assistido : icones.nao_assistido}
        </button></div>
        <div><button class="botao-favorito" onclick="atualizarFilme('${
          filme.titulo
        }', 'favorito')">
        ${filme.favorito ? icones.favorito : icones.nao_favorito}
        </button></div>
      </div>
    </div>
    `
  );
}

window.pegarIndexDoFilme = (titulo) => {
  return filmesCadastrados.findIndex((filme) => filme.titulo === titulo);
};

window.atualizarFilme = (titulo, chave) => {
  const index = pegarIndexDoFilme(titulo);
  const novoValorChave = !filmesCadastrados[index][chave];

  if (chave === "favorito" && novoValorChave && maxFavorito())
    return alert("Já existem três filmes favoritos");

  filmesCadastrados[index][chave] = novoValorChave;

  if (chave === "assistido") {
    calcularDuracao();
  }

  atualizarIcone(titulo, chave, novoValorChave);
};

window.atualizarIcone = (id, chave, valorChave) => {
  document
    .getElementById(id.toLowerCase().replaceAll(" ", "-"))
    .querySelector(`.botao-${chave}`).innerHTML =
    icones[valorChave ? chave : `nao_${chave}`];
};

function maxFavorito() {
  return (
    filmesCadastrados.reduce(
      (acumulador, filme) => (acumulador += filme.favorito ? 1 : 0),
      0
    ) >= 3
  );
}

window.calcularDuracao = () => {
  const duracaoAssistida = filmesCadastrados.reduce(
    (duracao, filme) => (duracao += filme.assistido ? +filme.duracao : 0),
    0
  );

  document.getElementById(
    "tempoAssistido"
  ).innerHTML = `${duracaoAssistida} minutos`;
};
