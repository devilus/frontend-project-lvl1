import _ from 'lodash';

export const randomNum = (minNum = 1, maxNum = 100) => _.random(minNum, maxNum);

export const isEvenNum = (num) => num % 2 === 0;
