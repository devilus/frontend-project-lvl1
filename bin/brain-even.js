#!/usr/bin/env node
import runGame from '../index.js';
import { randomNum } from '../src/lib.js';
import { isEvenNum } from '../src/lib.js';
import dataConstructor from '../src/dataConstructor.js';

const qaBuilder = () => {
  const question = randomNum();
  const answer = isEvenNum(question) ? 'yes' : 'no';

  return { question, answer };
};

const gameData = dataConstructor(qaBuilder);
const startMessage =
  'Answer "yes" if the number is even, otherwise answer "no".';

runGame(gameData, startMessage);
