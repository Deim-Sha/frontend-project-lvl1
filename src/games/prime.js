import { cons } from 'hexlet-pairs';
import playGame from '..';
import getRandomInteger from '../utils';

const rulePrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n / 2; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const createQuestionAnswer = () => {
  const question = getRandomInteger();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => playGame(rulePrime, createQuestionAnswer);
