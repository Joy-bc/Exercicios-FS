const table = document.getElementById('groupExpenses');

const BrazilianReal = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

class GroupExpenses {
  title;
  partialValue;
  amount;
  #numberOfParticipants;

  constructor(title, numberOfParticipants, amount) {
    this.title = title;
    this.#numberOfParticipants = numberOfParticipants;
    this.amount = amount;
    this.partialValue = (amount / numberOfParticipants).toFixed(2);
  }
}

const groupExpenses = [];

function generateTable(groupExpenses, elementeId) {
  let expense = groupExpenses[groupExpenses.length - 1];

  let div = document.createElement('div');
  let divTitle = document.createElement('div');
  let divPartialValue = document.createElement('div');
  let divAmount = document.createElement('div');

  div.classList = 'row';

  divTitle.innerText = expense.title;
  divPartialValue.innerText = BrazilianReal.format(expense.partialValue);
  divAmount.innerText = BrazilianReal.format(expense.amount);

  div.appendChild(divTitle);
  div.appendChild(divPartialValue);
  div.appendChild(divAmount);

  elementeId.appendChild(div);

  window.alert(`A despesa ${expense.title} foi adicionada com sucesso!`);
}

function addGroupExpense() {
  let inputTitle = document.getElementById('title-input');
  let inputParticipants = document.getElementById('numberOfParticipants-input');
  let inputAmount = document.getElementById('amount-input');

  groupExpenses.push(
    new GroupExpenses(
      inputTitle.value,
      inputParticipants.value,
      inputAmount.value
    )
  );
  console.log(inputTitle.value, inputParticipants.value, inputAmount.value);
  console.log(groupExpenses);

  generateTable(groupExpenses, table);

  console.log(groupExpenses);

  inputTitle.value = '';
  inputParticipants.value = '';
  inputAmount.value = '';
}
