// Implementation of Djikstras Two Stack implementation
// Evaluates an expression like ((a+b)*((c*d)+e))
// Important is that only two values and an operator
// are in between a single brace

class Calculator {
  operantsStack: string[] = [];
  anna: number[] = [];

  evaluate(expression: string): number {
    for (const char of expression) {
      if (char === '(') {
      } else if (char === '+') {
        this.operantsStack.push('+');
      } else if (char === '*') {
        this.operantsStack.push('*');
      } else if (char === ')') {
        const operant = this.operantsStack.pop();
        this.anna.push(operant === '+'
          ? this.anna.pop() + this.anna.pop()
          : this.anna.pop() * this.anna.pop())
      } else {
        const numberChar = Number(char);
        if (isNaN(numberChar)) {
          continue;
        }
        this.anna.push(numberChar);
      }
    }
    return this.anna.pop()
  }
}


const calculator = new Calculator();
const val = calculator.evaluate('((1+2)+((5*4)+(1+1)))');
console.log(val);