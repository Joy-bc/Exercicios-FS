let modelosCadastrados = [];

function cadastroDeModelo(marca, modelo) {
  modelosCadastrados.push({ marca: marca, modelo: modelo });
  console.log(`O modelo ${modelo} foi cadastrado com sucesso`);
  return modelosCadastrados;
}

cadastroDeModelo("Fiat", "Uno");
cadastroDeModelo("Renault", "Sandero");
cadastroDeModelo("Renault", "Sandero Stepway");

console.log(modelosCadastrados);
