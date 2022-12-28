// perhaps make this into a class or find out how to make it into a function

const problem = {
  number1: Math.floor(Math.random() * 10),
  number2: Math.floor(Math.random() * 10),
  operator: ['+', '-'],
  generateQuestion: function question(num1, num2, opp) {
    console.log(num1, opp, num2, ' = ', eval(`${num1} ${opp} ${num2}`));
    return eval(`${num1} ${opp} ${num2}`);
  },
};
const { number1, number2 } = problem;

const operatorElement = document.querySelector('#operator');
const num1Element = document.querySelector('#num1');
const num2Element = document.querySelector('#num2');
const solutionElement = document.querySelector('#solution');
// const problemElement = document.querySelector('#problem');
const randomOperator =
  problem.operator[Math.floor(Math.random() * problem.operator.length)];

function handleKeyPress(e) {
  // console.log(e);
  switch (e.key) {
    case 'ArrowUp':
      operatorElement.textContent = '+';
      // if (`${eval(num1Element.textContent + num2Element.textContent) === question(number1,number2, randomOperator)}`){
      //   alert('Correct!')
      // }
      break;
    case 'ArrowDown':
      operatorElement.textContent = '-';
      handleChange();
      break;
    case 'ArrowLeft':
      operatorElement.textContent = '*';
      break;
    case 'ArrowRight':
      operatorElement.textContent = '/';
      break;
  }
}

function handleChange() {
  // console.log(typeof operatorElement.textContent)
  // console.log(typeof randomOperator)
  if (operatorElement.textContent != randomOperator) {
    return;
  }
  problem.generateQuestion(number1, number2, randomOperator);
}

// problemElement.textContent = `${number1} _ ${number2} = ${eval(question(number1, number1, randomOperator))}`

num1Element.textContent = number1;
num2Element.textContent = number2;
solutionElement.textContent = problem.generateQuestion(number1, number2, randomOperator);
// question(number1, number2, randomOperator);

document.querySelector('body').addEventListener('keydown', handleKeyPress);
operatorElement.addEventListener('change', () => console.log('hi'));
// ⬆⬇➡⬅
