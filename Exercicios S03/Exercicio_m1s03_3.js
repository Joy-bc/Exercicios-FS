let veiculosCadastrados = [];

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
