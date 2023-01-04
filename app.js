const operatorElement = document.querySelector('#operator');
const userOperatorElement = document.querySelector('#user-operator');
const num1Element = document.querySelector('#num1');
const num2Element = document.querySelector('#num2');
const solutionElement = document.querySelector('#solution');
const hpBarElement = document.querySelector('.health-bar');
let hpElement = document.querySelector('.health');
let pointsElement = document.querySelector('.points');
let points = 0;
let health = 100;
let posCombo = 0;
let negCombo = 0;

// TODO Switch to React tasks
// anything that holds a value will need to be in a state

console.log(document.querySelector('.health-bar'));

function generateQuestion() {
  const operator = ['+', '-', '*', '/'];
  const randomOperator = operator[Math.floor(Math.random() * operator.length)];
  // +1 prevents 0 shenanigans
  const number1 = Math.floor(Math.random() * 10) + 1;
  const number2 = Math.floor(Math.random() * 10) + 1;
  const solution = eval(`${number1} ${randomOperator} ${number2}`);

  console.log(
    number1,
    randomOperator,
    number2,
    ' = ',
    eval(`${number1} ${randomOperator} ${number2}`)
  );

  num1Element.textContent = number1;
  num2Element.textContent = number2;
  operatorElement.textContent = randomOperator;
  solutionElement.textContent = solution;
  return eval(`${number1} ${randomOperator} ${number2}`);
}
hpElement.textContent = `Hp: ${health}`;
pointsElement.textContent = `Points: ${points}`;

generateQuestion();

// const problemElement = document.querySelector('#problem');

function handleKeyPress(e) {
  // console.log(e);
  switch (e.key) {
    case 'ArrowUp':
      userOperatorElement.textContent = '+';
      handleChange();
      break;
    case 'ArrowDown':
      userOperatorElement.textContent = '-';
      handleChange();
      break;
    case 'ArrowLeft':
      userOperatorElement.textContent = '/';
      handleChange();
      break;
    case 'ArrowRight':
      userOperatorElement.textContent = '*';
      handleChange();
      break;
  }
}

function handleChange() {
  if (userOperatorElement.textContent != operatorElement.textContent) {
    // delay if needed
    // setTimeout(generateQuestion ,500)
    generateQuestion();

    health -= 5 + negCombo;
    hpElement.textContent = `Hp: ${health}`;
    hpBarElement.value = health;
    negCombo++;
    posCombo = 0;
    return health;
  }
  generateQuestion();
  points += 1 + posCombo;
  pointsElement.textContent = `Points: ${points + posCombo}`;
  posCombo++;
  console.log(posCombo);
  negCombo = 0;
  return points;
}

document.querySelector('body').addEventListener('keydown', handleKeyPress);
operatorElement.addEventListener('change', () => console.log('hi'));
// ⬆⬇➡⬅
