import React from 'react';
// const { db, Trick } = require('.server/trickModel');
import './TrickCard.scss';


const TrickCard = ({ trick }) => {
  return (
    <div className="card">
      <h2 className="trickName">{trick.trickName}</h2>
      <p className="description">{trick.description}</p>
      <p className="cue">Cue: {trick.cue}</p>
      <p className="difficultyLevel">Difficulty Level: {trick.difficultyLevel}</p>
      <p className="reinforcement">Reinforcement: {trick.reinforcement}</p>
      <p className="repetitions">Repetitions: {trick.repetitions}</p>
    </div>
  );
};

export default TrickCard;