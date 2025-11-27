import React from 'react';
import { useSelector } from 'react-redux';
import VerbCard from '../verbs/VerbCard.jsx';

const Favorites = () => {
  const favorites = useSelector(state => state.favorites.items);

  if (!Array.isArray(favorites) || favorites.length === 0) {
    return <div>Ваш список избранных пуст</div>;
  }

  return (
    <div className="favorites-wrapper">
      <h2>Избранное</h2>
      {favorites.map(verb => (
        <div key={verb.id} className="favorite-item">
          <VerbCard verb={verb} />
        </div>
      ))}
    </div>
  );
};

export default Favorites;
