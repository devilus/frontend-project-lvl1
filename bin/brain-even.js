#!/usr/bin/env node
import readLineSync from 'readline-sync';

const getRandomNum = () => Math.floor(Math.random() * 1000);
const isEvenNum = (num) => num % 2 === 0;
const userName = readLineSync.question('May I have your name? ').trim();
const maxLevel = 3;
let level = 0;

console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

do {
  const randomNum = getRandomNum();
  const correctAnswer = isEvenNum(randomNum) ? 'yes' : 'no';

  console.log(`Question: ${randomNum}`);

  const userAnswer = readLineSync.question('Your answer: ').trim();

  if (userAnswer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
    );
    break;
  }

  level += 1;
} while (level < maxLevel);

if (level === maxLevel) {
  console.log(`Congratulations, ${userName}!`);
} else {
  console.log(`Let's try again, ${userName}!`);
}
