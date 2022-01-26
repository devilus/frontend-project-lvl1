#!/usr/bin/env node
import _ from 'lodash';
import runGame, { maxLevel } from '../index.js';
import { randomNum } from '../src/lib.js';

const calculate = (operation) => {
  const [operand1, operator, operand2] = operation.split(' ');

  switch (operator) {
    case '+':
      return _.toNumber(operand1) + _.toNumber(operand2);
    case '-':
      return _.toNumber(operand1) - _.toNumber(operand2);
    case '*':
      return _.toNumber(operand1) * _.toNumber(operand2);
    default:
      return NaN;
  }
};

const qa = () => {
  const [operand1, operand2] = [randomNum(), randomNum()];
  const question = `${operand1} ${_.sample(['+', '-', '*'])} ${operand2}`;
  const answer = calculate(question);

  return { question, answer };
};

const gameData = [];
const startMessage = 'What is the result of the expression?';

for (let i = 0; i < maxLevel; i += 1) {
  gameData.push(qa());
}

runGame(gameData, startMessage);
