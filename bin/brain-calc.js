#!/usr/bin/env node
import runGame, { maxLevel, randomNum } from '../index.js';

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
for (let i = 0; i < maxLevel; i += 1) {
  gameData.push(qa());
}

runGame(gameData);
