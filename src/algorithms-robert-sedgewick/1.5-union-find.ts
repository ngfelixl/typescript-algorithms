/**
 * Unweighted union find implementation p. 221, Algorithms
 */
class Unifier {
  unionGroups = new Set<Set<number>>();

  constructor(private readonly objects: Set<number>) {}

  union(p: number, q: number): void {
    if (!this.containsBoth(p, q)) {
      throw new Error('P or Q is not available in the set of objects.');
    }
  
    const { groupOfP, groupOfQ } = this.getGroupsOf(p, q);
    
    if (!groupOfP && !groupOfQ) {
      this.unionGroups.add(new Set([p, q]));
    } else if (groupOfP && !groupOfQ) {
      groupOfP.add(q);
    } else if (!groupOfP && groupOfQ) {
      groupOfQ.add(p);
    } else if (groupOfP && groupOfQ && groupOfP !== groupOfQ) {
      const mergedSet = new Set([...groupOfP, ...groupOfQ]);
      this.unionGroups.delete(groupOfP);
      this.unionGroups.delete(groupOfQ);
      this.unionGroups.add(mergedSet);
    }
  }

  connected(p: number, q: number): boolean {
    const { groupOfP, groupOfQ } = this.getGroupsOf(p, q);
    return groupOfP === groupOfQ;
  }

  private getGroupsOf(p: number, q: number): { groupOfP: Set<number>|null, groupOfQ: Set<number>|null }  {
    let groupOfP: Set<number>|null = null;
    let groupOfQ: Set<number>|null = null;
    
    for (const unionGroup of this.unionGroups) {
      if (unionGroup.has(p)) {
        groupOfP = unionGroup;
      }

      if (unionGroup.has(q)) {
        groupOfQ = unionGroup;
      }
    }

    return {groupOfP, groupOfQ};
  }

  private containsBoth(p: number, q: number) {
    return this.objects.has(p) && this.objects.has(q);
  }
}



const unifier = new Unifier(new Set([0,1,2,3,4,5,6,7,8,9]));
unifier.union(0, 1);
unifier.union(2, 3);
console.log(`0 - 1: ${unifier.connected(0, 1)}`);
console.log(`0 - 2: ${unifier.connected(0, 2)}`);
console.log(`0 - 3: ${unifier.connected(0, 3)}`);
console.log(`0 - 4: ${unifier.connected(0, 4)}`);