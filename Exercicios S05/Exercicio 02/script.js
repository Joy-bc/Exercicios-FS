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

const filmes = [new Filme("Jumanji", 209, 4)];

function cadastrar() {
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
  } else {
    window.alert(`O filme ${inputTitulo.value} já foi cadastrado!`);
  }

  inputTitulo.value = "";
  inputDuracao.value = "";
  inputNota.value = "";
}
