let marcasCadastradas = [];

function cadastroDeMarca(...marcas) {
  for (const marca of marcas) {
    marcasCadastradas.push(marca);
    console.log(`Marca ${marca} cadastrada com sucesso!`);
  }
  return marcasCadastradas;
}
cadastroDeMarca("Julio", "Marcio", "Maria");
cadastroDeMarca("Joyce", "Marcus", "Gabriel");

console.log(marcasCadastradas);



