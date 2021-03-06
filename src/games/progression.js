import { cons } from 'hexlet-pairs';
import playGame from '..';
import getRandomInteger from '../utils';

const ruleProgression = 'What number is missing in the progression?';
const progressionLength = 10;

const createArithmeticProgression = (start, step, length) => {
  const arithmeticProgression = [];
  for (let i = 0; i < length; i += 1) {
    const progressionMember = start + step * i;
    arithmeticProgression.push(progressionMember);
  }
  return arithmeticProgression;
};

const createQuestionAnswer = () => {
  const firstMember = getRandomInteger();
  const diff = getRandomInteger();
  const progression = createArithmeticProgression(firstMember, diff, progressionLength);
  const hiddenMemberIndex = getRandomInteger(0, progression.length - 1);
  const correctAnswer = progression[hiddenMemberIndex].toString();
  progression.splice(hiddenMemberIndex, 1, '..');
  const question = progression.join(' ');
  return cons(question, correctAnswer);
};

export default () => playGame(ruleProgression, createQuestionAnswer);
