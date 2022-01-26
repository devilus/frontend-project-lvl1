import _ from 'lodash';
import readLineSync from 'readline-sync';

export const maxLevel = 3;
export const randomNum = (maxNum = 100) => _.random(1, maxNum);

const isCorrectAnswer = (userAnswer, correctAnswer) =>
  userAnswer === _.toString(correctAnswer);

const inputRequest = (title = '') => _.trim(readLineSync.question(`${title} `));

export default (gameData = {}) => {
  if (!_.isArray(gameData)) {
    throw new Error('Incorrect game data!');
  }

  console.log('Welcome to the Brain Games!');
  const userName = inputRequest('May I have your name?');
  console.log(`Hello, ${userName}!`);

  let level = 0;
  for (; level < gameData.length; level += 1) {
    const { question, answer } = gameData[level];

    console.log(`Question: ${question}`);
    const userAnswer = inputRequest('Your answer:');

    if (!isCorrectAnswer(userAnswer, answer)) {
      break;
    }

    console.log('Correct!');
  }

  if (level === maxLevel) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};
