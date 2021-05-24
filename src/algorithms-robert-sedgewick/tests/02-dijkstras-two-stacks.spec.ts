import { Calculator } from '../02-dijkstras-two-stacks';

describe('Dijkstras Two Stacks', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it('should calculate ((1+2)+((5*4)+(1+1))) correctly', () => {
    const val = calculator.evaluate('((1+2)+((5*4)+(1+1)))');

    expect(val).toBe(25);
  });
});
