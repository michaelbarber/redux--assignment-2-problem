import * as actionTypes from './actions';

const initialStateForThisReducer = {
    persons: [],
}

// this is just a function
// we are assigning a function to a variable
// state = initialState is just giving state a default value
const reducer = (state = initialStateForThisReducer, action) => {

    switch (action.type){
        case actionTypes.ADD_PERSON:
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: action.personData.name,
                age: action.personData.age
            }
            return {
                ...state,
                persons: state.persons.concat(newPerson)
            }
        case actionTypes.REMOVE_PERSON:
            return {
                ...state,
                persons: state.persons.filter(person => person.id !== action.personId)
            }
    }
    return state;
};


// so you can use the reducer outside of this file
export default reducer;