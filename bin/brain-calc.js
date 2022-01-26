#!/usr/bin/env node
import _ from 'lodash';
import runGame from '../index.js';
import randomNum from '../src/modules/randomNum.js';
import dataConstructor from '../src/modules/dataConstructor.js';

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

const qaBuilder = () => {
  const [operand1, operand2] = [randomNum(), randomNum()];
  const question = `${operand1} ${_.sample(['+', '-', '*'])} ${operand2}`;
  const answer = calculate(question);

  return { question, answer };
};

const gameData = dataConstructor(qaBuilder);
const startMessage = 'What is the result of the expression?';

runGame(gameData, startMessage);
