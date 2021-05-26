import { calculate } from '../16.26-calculator';

describe('Calculator', () => {
  it('should evaluate the expression "2*3+5/6*3+15" correctly to 23.5', () => {
    const expression = '2*3+5/6*3+15';

    const result = calculate(expression);

    expect(result).toBe(23.5);
  });

  it('should evaluate the expression "2/3/5*20+5-10/2" correctly to 2', () => {
    const expression = '2/4/5*20+5-10/2';

    const result = calculate(expression);

    expect(result).toBe(2);
  });
});
