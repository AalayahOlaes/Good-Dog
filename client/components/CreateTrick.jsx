import React, { Component, useState, useEffect } from 'react';

const TrickForm = (props) => {
    const [formElements, setFormElements] = useState({
      trickName: '',
      description: '',
      cue: '',
      difficultyLevel: '',
      reinforcement: '',
      repetitions: ''
    });
  
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
        console.log('before fetch')
        const response = await fetch('/api/createTrick', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formElements)
        });
        console.log('after fetch')
        if (!response.ok) {
          throw new Error('failed after fetch');
        }
  
        console.log('Trick created successfully');
      } catch (error) {
        console.error('Skipped fetch:', error.message);
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
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
          <button>I'm Finished!</button>
        </div>
      </form>
    );
  }

export { TrickForm }

