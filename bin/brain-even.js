#!/usr/bin/env node
import runGame, { maxLevel } from '../index.js';
import { randomNum } from '../src/lib.js';
import { isEvenNum } from '../src/lib.js';

const qa = () => {
  const question = randomNum();
  const answer = isEvenNum(question) ? 'yes' : 'no';

  return { question, answer };
};

const gameData = [];
const startMessage =
  'Answer "yes" if the number is even, otherwise answer "no".';

for (let i = 0; i < maxLevel; i += 1) {
  gameData.push(qa());
}

runGame(gameData, startMessage);
