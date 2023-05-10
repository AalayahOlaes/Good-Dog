import React, { Component } from 'react';

class TrickForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            trickName: '',
            description: '',
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
           </form>
        )
    }
}

export { TrickForm } ;