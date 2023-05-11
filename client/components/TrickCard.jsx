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
      <p className='cue'>
        <span className="label">Cue:</span> {trick.cue}
      </p>
      <p className="difficultyLevel">
        <span className="label">Difficulty Level: </span>
        {trick.difficultyLevel}</p>
      <p className="reinforcement">
        <span className="label">Reinforcement: </span>
        {trick.reinforcement}</p>
      <p className="repetitions">
        <span className="label">Repetitions: </span>
      {trick.repetitions}</p>
      <button
        className="deleteButton"
        id={trick._id}
        onClick={() => {deleteCard(trick._id); return window.location.reload(false)}}
      >
        <FaTrash />
      </button>
    </div>
  );
};

export default TrickCard;

