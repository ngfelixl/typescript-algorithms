/**
 * Solution for exercise 17.7 in "Cracking the Coding Interview"
 * 2021/05/21
 */

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

function getNameCountWithSynonyms(names: {[name: string]: number}, synonyms: [string, string][]) {
  const groupedSynonyms = groupSynonyms(synonyms);

  return groupedSynonyms.map(group => ({
    [[...group][0]]: [...group].reduce((acc, name) => acc + (names[name] ?? 0), 0)
  }));
}

function groupSynonyms(synonyms: [string, string][]): Set<string>[] {
  return synonyms.reduce((acc, cur: [string, string]) => {
    const index = acc.findIndex(group => group.has(cur[0]) || group.has[cur[1]]);
    if (index > -1) {
      acc[index].add(cur[0]);
      acc[index].add(cur[1]);
      return acc;
    } else {
      return [...acc, new Set<string>(cur)];
    }
  }, [] as Set<string>[]);
}

console.log(getNameCountWithSynonyms(names, synonyms));
