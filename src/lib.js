import _ from 'lodash';
import { maxLevel } from '../index.js';

export const randomNum = (maxNum = 100) => _.random(1, maxNum);

export const isEvenNum = (num) => num % 2 === 0;

export const gameDataBuild = (qaBuilder) => {
  if (!_.isFunction(qaBuilder)) {
    return [];
  }

  const gameData = [];
  for (let i = 0; i < maxLevel; i += 1) {
    const { question, answer } = qaBuilder();
    gameData.push({ question, answer });
  }

  return gameData;
};
