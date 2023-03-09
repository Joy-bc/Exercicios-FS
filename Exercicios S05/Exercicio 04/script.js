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

const filmesCadastrados = [];

// Ações

document
  .querySelector(".cadastro-de-filme form")
  .addEventListener("submit", (event) => event.preventDefault());

listarFilmes();

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
  let busca = document.getElementById("busca");

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
      <div class="divCard">
      <div class="divFoto"> <img src="${filme.img}" alt="Foto do Filme"></div>
      <div class="divConteudo">
        <div class="divNota">${filme.nota}</div>
        <div class="divDuracao">${filme.duracao}</div>
        <div class="divTitulo">${filme.titulo}</div>
        <div class="botaoAssistido"><button>assistido</button></div>
        <div class="botaoFavovirto"><button>favorito</button></div>
      </div>
    </div>
    `
  );
}
