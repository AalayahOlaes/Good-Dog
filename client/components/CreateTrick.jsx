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
          <label className='trickName'>Trick Name:</label>
          <input
            className='trickInput'
            type="text"
            name="trickName"
            value={formElements.trickName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className='descrip'>Description:</label>
          <input
            className='descripInput'
            name="description"
            value={formElements.description}
            onChange={handleInputChange}
          ></input>
        </div>
        <div>
          <label className='cueForm'>Cue:</label>
          <input
            className='cueInput'
            type="text"
            name="cue"
            value={formElements.cue}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className='diffForm'>Difficulty Level (1-10):</label>
          <input
            className='diffInput'
            type="number"
            name="difficultyLevel"
            value={formElements.difficultyLevel}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className='reForm'>Reinforcement:</label>
          <input
            className='reInput'
            type="text"
            name="reinforcement"
            value={formElements.reinforcement}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className='repeForm'>Repetitions:</label>
          <input
            className='repeInput'
            type="number"
            name="repetitions"
            value={formElements.repetitions}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button className='submitButton' onClick={handleSubmit}>I'm Finished!</button>
        </div>
      </form>
    );
  }

export { TrickForm }

