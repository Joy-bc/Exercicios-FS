class Filme {
  titulo;
  duracao;
  nota;
  favorito;
  assistido;
  img;

  constructor(titulo, duracao, nota) {
    this.titulo = titulo;
    this.duracao = duracao;
    this.nota = nota;
    this.favorito = false;
    this.assistido = false;
    this.img = "https://picsum.photos/id/237/250/200";
  }
}

const container = document.getElementById("container");

const filmes = [];

function cadastrarFilme() {
  let inputTitulo = document.getElementById("titulo");
  let inputDuracao = document.getElementById("duracao");
  let inputNota = document.getElementById("nota");

  const tituloRepetido = filmes.filter(
    (filme) => filme.titulo == inputTitulo.value
  );

  if (tituloRepetido == "") {
    filmes.push(
      new Filme(inputTitulo.value, inputDuracao.value, inputNota.value)
    );

    console.log(filmes);

    window.alert(
      `O filme ${inputTitulo.value}, de duração de ${inputDuracao.value}min e nota ${inputNota.value} foi adicionado com sucesso!`
    );

    listarFilmes(filmes);
  } else {
    window.alert(`O filme ${inputTitulo.value} já foi cadastrado!`);
  }

  inputTitulo.value = "";
  inputDuracao.value = "";
  inputNota.value = "";
}

function listarFilmes() {
  const filme = filmes[filmes.length - 1];

  container.insertAdjacentHTML(
    "beforeend",
    `
      <div class="divCard">
      <div class="divFoto"> <img src="${filme.img}" alt=""></div>
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

listarFilmes();
