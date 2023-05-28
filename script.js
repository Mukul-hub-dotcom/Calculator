let result = document.getElementById('result');

function appendToResult(value) {
  result.value += value;
}

function clearResult() {
  result.value = '';
}

function handleOperator(operator) {
  if (result.value !== '') {
    result.value += operator;
  }
}

function calculateResult() {
  const expression = result.value;
  
  try {
    const answer = eval(expression);
    result.value = answer;
  } catch (error) {
    result.value = 'Error';
  }
}
