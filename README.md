# Algorithms in TypeScript

This repository contains solutions and tests for algorithms written in TypeScript. I've implemented most of the
algorithms myself without copy and pasting the solution. Therefore I do not guarantee correctness. To minimize implementation
issues there are unit tests for most of the algorithms. Currently the algorithms focus on two books:

- **Algorithms; Robert Sedgewick**
- **Cracking the Coding Interview; Gayle Laakmann McDowell**

While the "Algorithms" book focuses more on data structures, their implementation and explanation, "Cracking the
Coding Interview" contains more (tough) day-to-day problems, for which you need to apply the correct data structures.

## Getting started

Make sure you have NodeJS installed on your machine. Install the TypeScript and Jest (Unit test) dependencies by

```
npm i
```

## Usage for practice

You can use this repository to practice your algorithms knowledge. Many algorithms have tests which you can use
to validate your own implementation of the problem. Just delete the algorithm implementation and the test suite
should fail.

To execute the test suite in watch mode you can run

```
npm run test -- --watchAll
```

## Available Algorithms with implementation and tests

Algorithms; Robert Sedgewick

- Shuffling
- Selection Sort
- Insertion Sort
- Shell Sort
- Merge Sort (Top-Down and Bottom-Up)
- Quick Sort
- Heap Priority Queue

Cracking the Coding Interview; Gayle Laakmann McDowell

- Zero Matrix
- String Rotation
- Number to English words
- Baby Name Synonyms