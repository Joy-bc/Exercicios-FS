import calcularDuracao from "./calculo.js";
import { listarFilmes } from "./DOM.js";
import * as icones from "./icons.js";

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

const filmesCadastrados = [];

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

function pegarIndexDoFilme(titulo) {
  return filmesCadastrados.findIndex((filme) => filme.titulo === titulo);
}

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
}

function atualizarIcone(id, chave, valorChave) {
  document
    .getElementById(id.toLowerCase().replaceAll(" ", "-"))
    .querySelector(`.botao-${chave}`).innerHTML =
    icones[valorChave ? chave : `nao_${chave}`];
}

function maxFavorito() {
  return (
    filmesCadastrados.reduce(
      (acumulador, filme) => (acumulador += filme.favorito ? 1 : 0),
      0
    ) >= 3
  );
}

export { Filme, filmesCadastrados, cadastrarFilme };
