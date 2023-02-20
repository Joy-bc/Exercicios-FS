let marcasCadastradas = [];
let modelosCadastrados = [];
let veiculosCadastrados = [];

function adicionarMarca() {
  let inputMarca = document.getElementsByName("marca")[0];
  cadastroDeMarca(inputMarca.value);
}

function cadastroDeMarca(...marcas) {
  for (const marca of marcas) {
    marcasCadastradas.push(marca);
    console.log(`Marca ${marca} cadastrada com sucesso!`);
    console.log(marcasCadastradas);
  }
  return marcasCadastradas;
}

function adicionarModelo() {
  let inputModelo = document.getElementsByName("modelo")[0];
  let inputMarca = document.querySelector("#marcas");
  cadastroDeModelo(inputMarca.value, inputModelo.value);
}

function cadastroDeModelo(marca, modelo) {
  modelosCadastrados.push({ marca: marca, modelo: modelo });
  console.log(
    `O modelo ${modelo}, da marca ${marca}, foi cadastrado com sucesso`
  );
  console.log(modelosCadastrados);
  return modelosCadastrados;
}

function cadastrarVeiculo(marca, modelo, nomeDoVeiculo, km, valor, cor) {
  veiculosCadastrados.push({
    marca: marca,
    modelo: modelo,
    veiculo: nomeDoVeiculo,
    km: km,
    valor: valor,
    cor: cor,
  });
  console.log(`O veículo ${nomeDoVeiculo} foi cadastrado com sucesso!`);
  return veiculosCadastrados;
}

cadastrarVeiculo("Fiat", "Uno", "Uno Preto", "80km", 20000, "Preta");
cadastrarVeiculo(
  "Renault",
  "Sandero",
  "Sandero Vermelho",
  "50km",
  35000,
  "Vermelha"
);
cadastrarVeiculo(
  "Renault",
  "Sandero Stepway",
  "Sandero Stepway Branco",
  "100km",
  50000,
  "Branca"
);

console.log(veiculosCadastrados);

function listagemDeCarros() {
  return veiculosCadastrados;
}

console.log(listagemDeCarros());
