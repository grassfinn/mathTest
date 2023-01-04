const operatorElement = document.querySelector('#operator');
const userOperatorElement = document.querySelector('#user-operator');
const num1Element = document.querySelector('#num1');
const num2Element = document.querySelector('#num2');
const solutionElement = document.querySelector('#solution');
let hpElement = document.querySelector('.health');
let pointsElement = document.querySelector('.points');
let points = 0;
let health = 100;

function generateQuestion() {
  const operator = ['+', '-'];
  const randomOperator = operator[Math.floor(Math.random() * operator.length)];
  const number1 = Math.floor(Math.random() * 10);
  const number2 = Math.floor(Math.random() * 10);
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
      userOperatorElement.textContent = '*';
      break;
    case 'ArrowRight':
      userOperatorElement.textContent = '/';
      break;
  }
}

function handleChange() {
  // console.log(typeof operatorElement.textContent)
  // console.log(typeof randomOperator)
  if (userOperatorElement.textContent != operatorElement.textContent) {
    console.log(
      'incorrect!',
      operatorElement.textContent,
      userOperatorElement.textContent
    );
    health -= 5;
    hpElement.textContent = `Hp: ${health}`;
    return health;
  }
  console.log('correct!');
  generateQuestion();
  points++;
  pointsElement.textContent = `Points: ${points}`;
  return points;
}

// problemElement.textContent = `${number1} _ ${number2} = ${eval(question(number1, number1, randomOperator))}`

// solutionElement.textContent = problem.generateQuestion(
//   number1,
//   number2,
//   randomOperator
// );
// question(number1, number2, randomOperator);

document.querySelector('body').addEventListener('keydown', handleKeyPress);
operatorElement.addEventListener('change', () => console.log('hi'));
// ⬆⬇➡⬅
