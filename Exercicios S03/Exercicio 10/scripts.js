let marcasJSON = localStorage.getItem("lj.marcas");
let marcasCadastradas = marcasJSON ? JSON.parse(marcasJSON) : [];

let modelosJSON = localStorage.getItem("lj.modelos");
let modelosCadastrados = modelosJSON ? JSON.parse(modelosJSON) : [];

let veiculosJSON = localStorage.getItem("lj.veiculos");
let veiculosCadastrados = veiculosJSON ? JSON.parse(veiculosJSON) : [];

const body = document.body;
listarCarros(veiculosCadastrados);
adicionarMarcaNoDom(marcasCadastradas);
adicionarModeloNoDom(modelosCadastrados);

function adicionarMarca() {
  let inputMarca = document.getElementsByName("marca")[0];

  marcasCadastradas.push(inputMarca.value);

  localStorage.setItem("lj.marcas", JSON.stringify(marcasCadastradas));

  console.log(`Marca ${inputMarca.value} cadastrada com sucesso!`);
  console.log(marcasCadastradas);
}

function adicionarMarcaNoDom(marcas) {
  let selectMarcas = document.querySelector(".marcasNoDom");
  for (const marca of marcas) {
    let optionMarca = document.createElement("option");
    optionMarca.value = marca;
    optionMarca.innerText = marca;
    selectMarcas.appendChild(optionMarca);
  }
}

function adicionarModelo() {
  let inputModelo = document.getElementsByName("modelo")[0];
  let inputMarca = document.querySelector(".marcasNoDom");

  modelosCadastrados.push({
    marca: inputMarca.value,
    modelo: inputModelo.value,
  });

  localStorage.setItem("lj.modelos", JSON.stringify(modelosCadastrados));

  console.log(
    `O modelo ${inputModelo.value}, da marca ${inputMarca.value}, foi cadastrado com sucesso`
  );
  console.log(modelosCadastrados);
}

function adicionarModeloNoDom(modelos) {
  let selectModelos = document.querySelector(".modelosNoDom");

  for (const modelo of modelos) {
    let optionModelo = document.createElement("option");
    optionModelo.value = modelo.modelo;
    optionModelo.innerText = modelo.modelo;
    selectModelos.appendChild(optionModelo);
  }
}

function adicionarVeiculo() {
  let inputModelo = document.querySelector(".modelosNoDom");
  let inputMarca = document.querySelector(".marcasNoDom");
  let inputCor = document.getElementById("cor");
  let inputKm = document.getElementById("km");
  let inputValor = document.getElementById("valor");

  veiculosCadastrados.push({
    marca: inputMarca.value,
    modelo: inputModelo.value,
    km: inputKm.value,
    valor: inputValor.value,
    cor: inputCor.value,
  });

  localStorage.setItem("lj.veiculos", JSON.stringify(veiculosCadastrados));

  console.log(
    `O veículo ${inputModelo.value}, ${inputMarca.value}, foi cadastrado com sucesso!`
  );
  console.log(veiculosCadastrados);
}

function listarCarros(carros) {
  const container = document.getElementById("container");
  for (const carro of carros) {
    let divCard = document.createElement("div");
    let divFoto = document.createElement("div");
    let spanFoto = document.createElement("span");
    let divConteudo = document.createElement("div");
    let nome = document.createElement("h3");
    let descricao = document.createElement("p");
    let valor = document.createElement("p");

    divCard.classList = "divCard";
    divFoto.classList = "divFoto";
    spanFoto.classList = "spanFoto";
    divConteudo.classList = "divConteudo";
    nome.classList = "nome";
    descricao.classList = "descricao";
    valor.classList = "valor";

    nome.innerText = `${carro.marca} ${carro.modelo}`;
    descricao.innerText = `Carro na cor ${carro.cor} e com ${carro.km} rodados`;
    valor.innerText = `R$ ${carro.valor}`;

    container.appendChild(divCard);
    divCard.appendChild(divFoto);
    divFoto.appendChild(spanFoto);
    divCard.appendChild(divConteudo);
    divConteudo.appendChild(nome);
    divConteudo.appendChild(descricao);
    divConteudo.appendChild(valor);
  }
}
