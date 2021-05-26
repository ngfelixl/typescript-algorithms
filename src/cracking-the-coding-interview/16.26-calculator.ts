/**
 * This algorithm can calculate the expression with *, /, +, -
 * and positive integers. It is part of "Cracking the Coding Interview"
 * p. 185.
 * @param expression 
 * @returns 
 */
export function calculate(expression: string): number {
  const numberStack: number[] = [];
  const operatorStack: string[] = [];
  let tempNumber = '';

  for (const character of expression) {
    if (['*', '/', '+', '-'].includes(character)) {
      numberStack.push(Number(tempNumber));
      tempNumber = '';

      operate(numberStack, operatorStack, ['*', '/']);
      operatorStack.push(character);
    } else {
      tempNumber = `${tempNumber}${character}`;
    }
  }
  numberStack.push(Number(tempNumber));

  // calculate + and -
  const operatorStackLength = operatorStack.length;
  for (let i = 0; i < operatorStackLength; i++) {
    operate(numberStack, operatorStack);
  }

  return numberStack[0];
}

function operate(numberStack: number[], operatorStack: string[], only?: string[]) {
  const operator = operatorStack[operatorStack.length - 1];
  if (only && !only.includes(operator)) {
    return;
  }

  const firstNumber = numberStack[numberStack.length - 2];
  const secondNumber = numberStack[numberStack.length - 1];

  numberStack.pop();
  operatorStack.pop();

  switch(operator) {
    case '*': numberStack[numberStack.length - 1] = firstNumber * secondNumber; break;
    case '/': numberStack[numberStack.length - 1] = firstNumber / secondNumber; break;
    case '+': numberStack[numberStack.length - 1] = firstNumber + secondNumber; break;
    case '-': numberStack[numberStack.length - 1] = firstNumber - secondNumber; break;
  }
}
