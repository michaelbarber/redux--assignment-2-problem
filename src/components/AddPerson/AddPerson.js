import React, { Component } from 'react';

// we are turning this class to a component class so that we can manage the state of the inputs
// went from props.personAdded to this.props.personAdded because we are now inside a class
// alternatively you could of course implement the useState hook if you're using that version of React

import './AddPerson.css';

class AddPerson extends Component {

    // set up local ui state as there is no need to store it as a global state - the whole application doesnt need to know about it
    // it does matter as soon as the button is clicked which adds a person object which we do want to store in the global state
    state = {
        name: '',
        age: ''
    }

    nameChangedHandler = (event) => {
        this.setState({name: event.target.value});
    }

    ageChangedHandler = (event) => {
        this.setState({age: event.target.value});
    }

    render(){
        return(<div className="AddPerson">
        <input 
            type="text" 
            placeholder="Name" 
            onChange={this.nameChangedHandler}
            value={this.state.name}
            />
        <input 
            type="number" 
            placeholder="Age" 
            onChange={this.ageChangedHandler}
            value={this.state.age}
            />
        <button onClick={() => this.props.personAdded(this.state.name, this.state.age)}>Add Person</button>
    </div>);
    }
}

// capital A now as we have turned this class to a component
export default AddPerson;