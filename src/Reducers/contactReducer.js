import * as actionTypes from "../Actions/actionsType";
import initialState from "./initialState.json";


export default  function contactReducer(state=initialState.contactSection,action) {
    switch(action.type){
        case actionTypes.ADD_CONTACT:
            return {...action.contactSection};

        case actionTypes.UPDATE_CONTACT:
            return {...action.contactSection};

        default:
            return state;
    }

    
}