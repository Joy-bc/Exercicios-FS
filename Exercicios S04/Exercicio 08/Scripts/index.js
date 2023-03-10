const valueInput = document.getElementById('value-input');
const descriptionInput = document.getElementById('description-input');

class FinancialTransaction {
  description;
  value;

  constructor(description, value) {
    this.description = description;
    this.value = value;
  }
}

class FinancialTransactionManager{
  earningsList;
  expensesList;

  constructor (earningsArray = [], expensesArray = []) {
    this.earningsList = earningsArray;
    this.expensesList = expensesArray;

    this.createScreen()
  }

createScreen() {
  this.generateLists(this.earningsList, 'earnings-list');
  this.generateLists(this.expensesList, 'expenses-list');
}

  generateLists(list, listElementId) {
    for (var i = 0; i < list.length; i++) {
      var li = document.createElement('li');
      li.innerText = `${list[i].description}: R$ ${list[i].value}`;
  
      document.getElementById(listElementId).appendChild(li);
    }
  }
}

const financialTransactionManager = new FinancialTransactionManager([
  new FinancialTransaction('Salário', 4000),
  new FinancialTransaction('Freela', 400),
],
[
  new FinancialTransaction('Alimentação', 650),
  new FinancialTransaction('PSN', 40),
  new FinancialTransaction('Energia', 500),
])

var mesAtual = 'janeiro';
var entradas = 8000;
var saidas = 400;
var saldo = 1000;


// Mês
document.getElementById('month').innerHTML = mesAtual;

// Entradas
document.getElementById('total-earnings').innerHTML = entradas;

// Saídas
document.getElementById('total-expenses').innerHTML = saidas;

// Saldo
document.getElementById('final-balance').innerHTML = saldo;

function addFinancialMovement() {
  const earningRadioValueIsChecked =
    document.getElementById('earning-radio').checked;

  if (earningRadioValueIsChecked) {
    addEarning();
  } else {
    addExpense();
  }
}

function addExpense() {
  const newExpense = {
    description: descriptionInput.value,
    value: valueInput.value,
  };
  expensesList.push(newExpense);

  var li = document.createElement('li');
  li.innerText = `${newExpense.description}: R$ ${newExpense.value}`;

  document.getElementById('expenses-list').appendChild(li);
}

function addEarning() {
  const newExpense = {
    description: descriptionInput.value,
    value: valueInput.value,
  };
  expensesList.push(newExpense);

  var li = document.createElement('li');
  li.innerText = `${newExpense.description}: R$ ${newExpense.value}`;

  document.getElementById('earnings-list').appendChild(li);
}
