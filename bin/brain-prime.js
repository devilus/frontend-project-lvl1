#!/usr/bin/env node
import runGame from '../index.js';
import randomNum from '../src/modules/randomNum.js';
import dataConstructor from '../src/modules/dataConstructor.js';

const isPrimeNum = (num) => {
  for (let divisor = 2; divisor < num; divisor += 1) {
    if (num % divisor === 0) {
      return false;
    }
  }

  return true;
};

const qaBuilder = () => {
  const question = randomNum(2, 199);
  const answer = isPrimeNum(question) ? 'yes' : 'no';

  return { question, answer };
};

const gameData = dataConstructor(qaBuilder);
const startMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';

runGame(gameData, startMessage);
