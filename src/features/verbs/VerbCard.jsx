import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../favorites/favoritesSlice.jsx';

const VerbCard = ({ verb }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);
  const isFavorite = favorites.some((item) => item.id === verb.id);

  const speakText = (text) => {
    if ('speechSynthesis' in window && typeof text === 'string') {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    }
  };

  const exampleText =
    typeof verb.example === 'string'
      ? verb.example
      : verb.example?.text || '—';

  const toggleFavorite = () => {
    const cleanedVerb = {
      ...verb,
      example: exampleText,
    };

    if (isFavorite) {
      dispatch(removeFavorite(verb.id));
    } else {
      dispatch(addFavorite(cleanedVerb));
    }
  };

  return (
    <div className="verb-card">
      <h3>{verb.verb || '—'}</h3>

      <button className="verb-btn" onClick={() => speakText(verb.verb)}>
        Прослушать глагол
      </button>

      <p>
        <strong>Перевод:</strong> {verb.translation || '—'}
      </p>

      <p>
        <strong>Пример:</strong> {exampleText}
      </p>

      <button className="verb-btn" onClick={() => speakText(exampleText)}>
        Прослушать пример
      </button>

      {verb.imageUrl && (
        <div className="verb-image-wrapper">
          <img src={verb.imageUrl} alt={verb.verb} className="verb-image" />
        </div>
      )}

      <button className="favorite-btn" onClick={toggleFavorite}>
        {isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
      </button>
    </div>
  );
};

export default VerbCard;
