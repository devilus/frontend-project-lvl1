#!/usr/bin/env node
import _ from 'lodash';
import runGame from '../index.js';
import { randomNum } from '../src/lib.js';
import dataConstructor from '../src/dataConstructor.js';

const gcd = (num1, num2) => {
  if (num1 === num2) {
    return num1;
  }

  let divisor = _.min([num1, num2]);
  while (divisor > 0) {
    if (num1 % divisor === 0 && num2 % divisor === 0) {
      return divisor;
    }
    divisor -= 1;
  }

  return 1;
};

const qaBuilder = () => {
  const [num1, num2] = [randomNum(), randomNum()];
  const question = `${num1} ${num2}`;
  const answer = gcd(num1, num2);

  return { question, answer };
};

const gameData = dataConstructor(qaBuilder);
const startMessage = 'Find the greatest common divisor of given numbers.';

runGame(gameData, startMessage);
