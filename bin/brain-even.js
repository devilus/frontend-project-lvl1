#!/usr/bin/env node
import runGame from '../index.js';
import randomNum from '../src/modules/randomNum.js';
import dataConstructor from '../src/modules/dataConstructor.js';

const isEvenNum = (num) => num % 2 === 0;

const qaBuilder = () => {
  const question = randomNum();
  const answer = isEvenNum(question) ? 'yes' : 'no';

  return { question, answer };
};

const gameData = dataConstructor(qaBuilder);
const startMessage = 'Answer "yes" if the number is even, otherwise answer "no".';

runGame(gameData, startMessage);
