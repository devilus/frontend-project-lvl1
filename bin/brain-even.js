#!/usr/bin/env node
import runGame from '../index.js';
import { gameDataBuild, randomNum } from '../src/lib.js';
import { isEvenNum } from '../src/lib.js';

const qaBuilder = () => {
  const question = randomNum();
  const answer = isEvenNum(question) ? 'yes' : 'no';

  return { question, answer };
};

const gameData = gameDataBuild(qaBuilder);
const startMessage =
  'Answer "yes" if the number is even, otherwise answer "no".';

runGame(gameData, startMessage);
