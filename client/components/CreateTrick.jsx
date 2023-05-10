import React, { Component } from 'react';

class TrickForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            trickName: '',
            description: '',
            cue: '', 
            difficultyLevel: '', 
            reinforcement: '',
            repetitions: ''
        }
    }

    handleTrickChange = (event) => {
        this.setState({
            trickName: event.target.value
        })
    }

    handleDescripChange = (event) => {
        this.setState({
            description: event.target.value
        })
    }

    handleCueChange = (event) => {
        this.setState({
            description: event.target.value
        })
    }

    handleLevelChange = (event) => {
        this.setState({
            description: event.target.value
        })
    }

    handleReinforcementChange = (event) => {
        this.setState({
            description: event.target.value
        })
    }

    handleRepetitionsChange = (event) => {
        this.setState({
            description: event.target.value
        })
    }

    render() {
        return (
           <form> 
                <div>
                    <label> Trick Name:</label>
                    <input type="text"
                    value={this.state.trickName}
                    onChange={this.handleTrickChange}
                    />
                </div>
                <div>
                    <label> Description: </label>
                    <textarea value={this.state.description}
                    onChange={this.handleDescripChange}
                    ></textarea>
                </div>
                <div>
                    <label> Cue:</label>
                    <input type="text"
                    value={this.state.cue}
                    onChange={this.handleCueChange}
                    />
                </div>
                <div>
                    <label> Difficulty Level (1-10):</label>
                    <input type="number"
                    value={this.state.difficultyLevel}
                    onChange={this.handleLevelChange}
                    />
                </div>
                <div>
                    <label> Reinforcement:</label>
                    <input type="text"
                    value={this.state.reinforcement}
                    onChange={this.handleReinforcementChange}
                    />
                </div>
                <div>
                    <label> Repetitions:</label>
                    <input type="number"
                    value={this.state.repetitions}
                    onChange={this.handleRepetitionsChange}
                    />
                </div>
                <div>
                    <button> I'm Finished! </button>
                </div>
           </form>
        )
    }
}

export { TrickForm } ;