import { filmesCadastrados } from "./filme.js";
import * as icones from "./icons.js";

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

export { buscar, listarFilmes };
