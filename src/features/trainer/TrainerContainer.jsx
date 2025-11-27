import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Trainer from './Trainer.jsx';
import {
  startTraining,
  resetTrainer,
  markCorrect,
  markIncorrect,
  nextVerb,
  prevVerb
} from './trainerSlice';
import { incrementCompleted } from '../progress/progressSlice';
import '../../styles/index.css';


const TrainerContainer = () => {
  const dispatch = useDispatch();

  const allVerbs = useSelector(state => state.verbs.verbs);
  const trainingVerbs = useSelector(state => state.trainer.trainingVerbs);
  const currentVerbIndex = useSelector(state => state.trainer.currentVerbIndex);
  const finished = useSelector(state => state.trainer.finished);
  const correctCount = useSelector(state => state.trainer.correctCount);
  const incorrectCount = useSelector(state => state.trainer.incorrectCount);

  const handleStart = () => {
    if (allVerbs.length > 0) {
      dispatch(startTraining(allVerbs));
    } else {
      alert('Нет глаголов для тренировки');
    }
  };

  const handleAnswer = (isCorrect, nextStep) => {
    if (nextStep === "prev") {
      dispatch(prevVerb());
      return;
    }

    if (isCorrect) {
      dispatch(markCorrect());
      dispatch(incrementCompleted());
    } else {
      dispatch(markIncorrect());
    }

    if (nextStep === true) dispatch(nextVerb());
  };

  const handleReset = () => dispatch(resetTrainer());

  if (trainingVerbs.length === 0) {
    return (
      <div className="trainer-start">
        <h2>🔥 Начать тренировку</h2>
        <button className="btn-primary" onClick={handleStart}>Начать</button>
        <p>Приступить к тренировке</p>
      </div>
    );
  }

  if (finished) {
    return (
      <div className="trainer-finished">
        <h2>🏁 Тренировка окончена!</h2>
<p>Правильных ответов: {correctCount} 🎉👏 – Молодец, супер результат!</p>
<p>Неправильных ответов: {incorrectCount} 😢💪 – Не унывай! Попробуй еще!</p>
<button className="btn-primary" onClick={handleReset}>Начать заново</button>
      </div>
    );
  }

  return (
    <div className="trainer-wrapper">
      <Trainer
        verbs={trainingVerbs}
        currentIndex={currentVerbIndex}
        onAnswer={handleAnswer}
      />
    </div>
  );
};

export default TrainerContainer;