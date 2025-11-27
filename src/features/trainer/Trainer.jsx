import React, { useState, useEffect } from 'react';
import PhrasalVerbTask from './PhrasalVerbTask.jsx';


const Trainer = ({ verbs, currentIndex, onAnswer }) => {
  const [taskType, setTaskType] = useState(2);
  const [options, setOptions] = useState([]);
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [answeredCorrectly, setAnsweredCorrectly] = useState(null);
  const [isWaitingNext, setIsWaitingNext] = useState(false);
  const [savedAnswers, setSavedAnswers] = useState({});

  const currentVerb = verbs[currentIndex];

  const shuffleArray = arr => arr.sort(() => Math.random()-0.5);

  useEffect(() => {
    if (!currentVerb) return;

    if (savedAnswers[currentVerb.id]) {
      const ans = savedAnswers[currentVerb.id];
      setSelectedIdx(ans.selectedIdx ?? null);
      setAnsweredCorrectly(ans.answeredCorrectly ?? null);
    } else {
      setSelectedIdx(null);
      setAnsweredCorrectly(null);
    }

    setIsWaitingNext(false);

    const wrong = shuffleArray(
      verbs.filter(v => v.id !== currentVerb.id).map(v => v.translation)
    ).slice(0,2);
    setOptions(shuffleArray([currentVerb.translation, ...wrong]));
  }, [currentIndex, verbs, savedAnswers, currentVerb]);

  const handleClickOption = (opt, idx) => {
    if (isWaitingNext) return;
    const correct = opt === currentVerb.translation;
    setSelectedIdx(idx);
    setAnsweredCorrectly(correct);
    setIsWaitingNext(true);

    setSavedAnswers(prev => ({
      ...prev,
      [currentVerb.id]: { selectedIdx: idx, answeredCorrectly: correct }
    }));

    setTimeout(() => {
      onAnswer(correct, true);
      setIsWaitingNext(false);
    }, 700);
  };

  const handleTask3Answer = (isCorrect, nextStep) => {
    if (!savedAnswers[currentVerb.id]) {
      setSavedAnswers(prev => ({
        ...prev,
        [currentVerb.id]: { answeredCorrectly: isCorrect }
      }));
    } else {
      setSavedAnswers(prev => ({
        ...prev,
        [currentVerb.id]: { ...prev[currentVerb.id], answeredCorrectly: isCorrect }
      }));
    }

    onAnswer(isCorrect, nextStep);
  };

  return (
    <div className="trainer-wrapper">
      <h2>Тренажёр фразовых глаголов</h2>

      <div className="trainer-buttons-task-type">
        <button
          className={`task-type-button ${taskType===2 ? 'active' : ''}`}
          onClick={()=>!isWaitingNext && setTaskType(2)}
          disabled={isWaitingNext}
        >
          Упражнение №1 <br/>Укажи верный перевод
        </button>

        <button
          className={`task-type-button ${taskType===3 ? 'active' : ''}`}
          onClick={()=>!isWaitingNext && setTaskType(3)}
          disabled={isWaitingNext}
        >
          Упражнение №2<br/>Используй в предложении
        </button>
      </div>

      {taskType===2 && <>
        <h3>{currentVerb.verb}</h3>
        <p><i>Выбери верный перевод 👉✔️:</i></p>
        {options.map((opt,idx)=>(
          <button
            key={idx}
            className={`translation-option ${
              selectedIdx===idx ? (answeredCorrectly ? 'correct' : 'incorrect') : ''
            }`}
            onClick={()=>handleClickOption(opt,idx)}
            disabled={isWaitingNext}
          >
            {opt}
          </button>
        ))}
      </>}

      {taskType===3 &&
        <PhrasalVerbTask
          verb={currentVerb}
          onAnswer={handleTask3Answer}
          onPrev={()=>handleTask3Answer(false,"prev")}
          savedAnswer={savedAnswers[currentVerb.id]}
        />
      }

      <p className="progress">Прогресс: {currentIndex+1} / {verbs.length}</p>
    </div>
  );
};

export default Trainer;
