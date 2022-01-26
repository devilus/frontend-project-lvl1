#!/usr/bin/env node
import _ from 'lodash';
import runGame from '../index.js';
import randomNum from '../src/modules/randomNum.js'
import dataConstructor from '../src/modules/dataConstructor.js';

const generateProgression = () => {
  const start = randomNum(1, 50);
  const step = randomNum(2, 10);
  const length = randomNum(5, 15);

  const progression = [start];
  let counter = start;
  do {
    counter += step;
    progression.push(counter);
  } while (progression.length < length);

  return progression;
};

const qaBuilder = () => {
  const progression = generateProgression();
  const hiddenValue = _.sample(progression);
  const hiddenValueIndex = _.findIndex(
    progression,
    (idx) => idx === hiddenValue
  );

  progression[hiddenValueIndex] = '..';
  const question = progression.join(' ');

  return { question, answer: hiddenValue };
};

const gameData = dataConstructor(qaBuilder);
const startMessage = 'What number is missing in the progression?';

runGame(gameData, startMessage);
