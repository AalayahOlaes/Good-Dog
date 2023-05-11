import React, { Component, useState, useEffect } from 'react';
import './CreateTrick.scss';

const TrickForm = ({ setData }) => {
    const [formElements, setFormElements] = useState({
      trickName: '',
      description: '',
      cue: '',
      difficultyLevel: '',
      reinforcement: '',
      repetitions: ''
    });
  
    const [cards, setCards] = useState([]);

    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormElements((prevFormElements) => ({
        ...prevFormElements,
        [name]: value
      }));
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const response = await fetch('/api/createTrick', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formElements)
        });

        const data = await response.json();
        console.log("this is the data", data)
        setData(data);
        if (!response.ok) {
          throw new Error('failed after fetch');
        }
      } catch (error) {
        console.error('Skipped fetch:', error.message);
      }
    };

    useEffect(() => {
        console.log('Cards updated:', cards);
      }, [cards]);
    
  
    return (
      <form onSubmit={handleSubmit} className="myForm">
        <div>
            <h2 className='addTrick'>Add New Trick!</h2>
          <label>Trick Name:</label>
          <input
            type="text"
            name="trickName"
            value={formElements.trickName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formElements.description}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div>
          <label>Cue:</label>
          <input
            type="text"
            name="cue"
            value={formElements.cue}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Difficulty Level (1-10):</label>
          <input
            type="number"
            name="difficultyLevel"
            value={formElements.difficultyLevel}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Reinforcement:</label>
          <input
            type="text"
            name="reinforcement"
            value={formElements.reinforcement}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Repetitions:</label>
          <input
            type="number"
            name="repetitions"
            value={formElements.repetitions}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button onClick={handleSubmit}>I'm Finished!</button>
        </div>
      </form>
    );
  }

export { TrickForm }

