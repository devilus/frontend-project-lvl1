import _ from 'lodash';
import readLineSync from 'readline-sync';

export const maxLevel = 3;

const isCorrectAnswer = (userAnswer, correctAnswer) =>
  userAnswer === _.toString(correctAnswer);

const inputRequest = (title = '') => _.trim(readLineSync.question(`${title} `));

const showMessage = (message) => {
  if (!_.isEmpty(message)) {
    console.log(message);
  }
};

export default (gameData, startMessage = '') => {
  if (!_.isArray(gameData)) {
    throw new Error('Incorrect game data!');
  }

  showMessage('Welcome to the Brain Games!');
  const userName = inputRequest('May I have your name?');
  showMessage(`Hello, ${userName}!`);

  showMessage(startMessage);

  let level = 0;
  for (; level < gameData.length; level += 1) {
    const { question, answer } = gameData[level];

    showMessage(`Question: ${question}`);
    const userAnswer = inputRequest('Your answer:');

    if (!isCorrectAnswer(userAnswer, answer)) {
      break;
    }

    showMessage('Correct!');
  }

  if (level === maxLevel) {
    showMessage(`Congratulations, ${userName}!`);
  } else {
    showMessage(`Let's try again, ${userName}!`);
  }
};
