const table = document.getElementById('groupExpenses');

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

const groupExpenses = [
  new GroupExpenses('Aluguel', 2, 1100),
  new GroupExpenses('Bebidas do Carnaval', 4, 150),
  new GroupExpenses('Streaming', 3, 100),
];

generateTable(groupExpenses, table);

function generateTable(groupExpenses, elementeId) {
  for (const groupExpense of groupExpenses) {
    let div = document.createElement('div');
    let divTitle = document.createElement('div');
    let divPartialValue = document.createElement('div');
    let divAmount = document.createElement('div');

    div.classList = 'row';
    divTitle.innerText = `${groupExpense.title}`;
    divPartialValue.innerText = `${groupExpense.partialValue}`;
    divAmount.innerText = `${groupExpense.amount}`;

    div.appendChild(divTitle);
    div.appendChild(divPartialValue);
    div.appendChild(divAmount);

    elementeId.appendChild(div);
  }
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
}
