import _ from 'lodash';
import { maxLevel } from '../../index.js';

export default (qaBuilder) => {
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
