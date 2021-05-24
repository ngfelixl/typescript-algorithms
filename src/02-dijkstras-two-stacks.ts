// Implementation of Djikstras Two Stack implementation
// Evaluates an expression like ((a+b)*((c*d)+e))
// Important is that only two values and an operator
// are in between a single brace

export class Calculator {
  operantsStack: string[] = [];
  valueStack: number[] = [];

  evaluate(expression: string): number {
    for (const char of expression) {
      if (char === '(') {
      } else if (char === '+') {
        this.operantsStack.push('+');
      } else if (char === '*') {
        this.operantsStack.push('*');
      } else if (char === ')') {
        const operant = this.operantsStack.pop();
        this.valueStack.push(operant === '+'
          ? this.valueStack.pop() + this.valueStack.pop()
          : this.valueStack.pop() * this.valueStack.pop())
      } else {
        const numberChar = Number(char);
        if (isNaN(numberChar)) {
          continue;
        }
        this.valueStack.push(numberChar);
      }
    }
    return this.valueStack.pop()
  }
}