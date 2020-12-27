import React, { Component } from 'react';
// connect is a function which takes a component as an input and returns a hoc (higher order component)
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../store/actions'

class Persons extends Component {

    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onAddedPerson} />
                {this.props.prs.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onRemovedPerson(person.id)}/>
                ))}
            </div>
        );
    }
}

// store instructions of how you want the state managed by redux to be mapped to props which you will use
const mapStateToProps = state => {
    // map of prop names and slices of the state stored in redux
    // it's our way of configuring which kind of information we need
    return {
        prs: state.persons
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddedPerson: () => dispatch({type: actionTypes.ADD_PERSON}),
        onRemovedPerson: (id) => dispatch({type: actionTypes.REMOVE_PERSON, personId: id})
    };
};

// how it goes 
// 1. connect(apStateToProps, mapDispatchToProps) is the first function that is executed which returns a function
// 2. the function that is returned takes in Persons as an argument and returns a hoc (higher order component)
export default connect(mapStateToProps, mapDispatchToProps)(Persons);