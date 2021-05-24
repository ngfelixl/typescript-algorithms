import { numberToEnglishString } from '../16.8-number-to-english-string';

describe('numberToEnglishString', () => {
  it('should print "one hundred twenty six" for 126', () => {
    const str = numberToEnglishString(126);

    expect(str).toBe('one hundred twenty six');
  });

  it('should print "sixty five" for 65', () => {
    const str = numberToEnglishString(65);

    expect(str).toBe('sixty five');
  })

  it('should print "two thousand" for 2000', () => {
    const str = numberToEnglishString(2000);

    expect(str).toBe('two thousand');
  })

  it('should print "two million" for 2000000', () => {
    const str = numberToEnglishString(2000000);

    expect(str).toBe('two million');
  });

  it('should print "six trillion five hundred fourty nine billion one hundred fourty five million ninty two thousand three hundred fourty six" for 6549145092346', () => {
    const str = numberToEnglishString(6549145092346);

    expect(str).toBe('six trillion five hundred fourty nine billion one hundred fourty five million ninty two thousand three hundred fourty six');
  });
});
