import * as actionTypes from "./actionsType";


export const add = (contactSection)=>{
    return {type:actionTypes.ADD_CONTACT,contactSection:contactSection};

}

export const update =(contactSection)=>{
    return {type:actionTypes.UPDATE_CONTACT,contactSection:contactSection};

}