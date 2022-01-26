#!/usr/bin/env node
import runGame, { maxLevel, randomNum } from '../index.js';

const isEvenNum = (num) => num % 2 === 0;

const qa = () => {
  const question = randomNum();
  const answer = isEvenNum(question) ? 'yes' : 'no';

  return { question, answer };
};

const gameData = [];
for (let i = 0; i < maxLevel; i += 1) {
  gameData.push(qa());
}

runGame(gameData);
