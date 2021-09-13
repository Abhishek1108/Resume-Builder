import * as actionTypes from "../Actions/actionsType";
import initialState from "./initialState.json";


export default  function educationReducers(state=initialState.educationSection,action) {

    switch(action.type){
        case actionTypes.ADD_EDUCATION:
            return {...action.educationSection}

        case actionTypes.UPDATE_EDUCATION:
            return {...action.educationSection}

        default:
            return state;
    }
    
}