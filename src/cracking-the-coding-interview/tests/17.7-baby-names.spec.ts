import { getNameCountWithSynonyms } from '../17.7-baby-names';

const synonyms: [string, string][] = [
  ['Jon', 'John'], ['John', 'Johnny'], ['Chris', 'Kris'], ['Chris', 'Christopher']
];

const names = {
  'John': 15,
  'Jon': 12,
  'Chris': 13,
  'Kris': 4,
  'Christopher': 19
};

describe('babyNames', () => {
  it('should get the baby name counts including the synonyms', () => {
    const synonymGroups = getNameCountWithSynonyms(names, synonyms);

    expect(synonymGroups.length).toBe(2);
    expect(synonymGroups).toEqual([{ 'Jon': 27 }, { 'Chris': 36 }]);
  });
});
