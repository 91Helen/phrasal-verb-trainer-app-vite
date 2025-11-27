import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="welcome-banner">
      <h1>Добро пожаловать в тренажёр фразовых глаголов!</h1>
      <p className="subtitle">
        Учись легко, эффективно и в своём темпе.
      </p>

      <div className="actions">
        <Link to="/trainer" className="action-btn start">🔥 Начать тренировку</Link>
        <Link to="/verbs" className="action-btn verbs">📚 Изучить глаголы</Link>
        <Link to="/favorites" className="action-btn fav">⭐ Избранное</Link>
      </div>

      <img 
        className="banner-image"
        src="/images/learning-banner.png"
        alt="Learning"
      />
    </div>
  );
};

export default Hero;
