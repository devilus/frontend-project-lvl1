import _ from 'lodash';

export const randomNum = (maxNum = 100) => _.random(1, maxNum);

export const isEvenNum = (num) => num % 2 === 0;
