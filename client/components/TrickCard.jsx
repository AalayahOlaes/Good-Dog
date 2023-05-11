import React, {useEffect} from 'react';
import './TrickCard.scss';
import { FaTrash, FaDog } from 'react-icons/fa';

const TrickCard = ({ trick, data }) => {
  const deleteCard = (_id) => {
    fetch(`/api/${_id}`, {
      method: 'DELETE',
    })
    .then(console.log('after delete fetch'))
      .then((response) => response.json())
      // .then(() => window.location.reload(false))
      .catch((err) => console.log(err));
  };

  return (
    <div className="card">
        <div className="cardIconContainer">
          <FaDog className="cardIcon" /> {/* Icon at top-left corner */}
        </div>
      <h2 className="trickName">{trick.trickName}</h2>
      <p className="description">{trick.description}</p>
      <p className="cue">Cue: {trick.cue}</p>
      <p className="difficultyLevel">Difficulty Level: {trick.difficultyLevel}</p>
      <p className="reinforcement">Reinforcement: {trick.reinforcement}</p>
      <p className="repetitions">Repetitions: {trick.repetitions}</p>
      <button
        className="deleteButton"
        id={trick._id}
        onClick={() => {deleteCard(trick._id)}}
      >
        <FaTrash />
      </button>
    </div>
  );
};

export default TrickCard;

