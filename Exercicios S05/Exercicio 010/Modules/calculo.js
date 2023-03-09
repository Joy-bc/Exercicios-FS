export default function calcularDuracao() {
  const duracaoAssistida = filmesCadastrados.reduce(
    (duracao, filme) => (duracao += filme.assistido ? +filme.duracao : 0),
    0
  );

  document.getElementById(
    "tempoAssistido"
  ).innerHTML = `${duracaoAssistida} minutos`;
}
