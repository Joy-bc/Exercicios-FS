let escopo = "Estou no escopo Gobal";

function consoleDoEscopo() {
  let escopo = "Estou no escopo de Função";
  if (escopo) {
    let escopo = "Estou no escopo de Bloco";
    console.log(escopo);
  }
  console.log(escopo);
}

consoleDoEscopo();
console.log(escopo);
