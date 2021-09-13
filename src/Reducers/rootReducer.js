import documentReducer from "./documentReducer";
import educationReducer from "./educationReducer";
import contactReducer from "./contactReducer";
import authReducer from "./authReducers";
import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";




const rootReducer=combineReducers({
    contactSection:contactReducer,
    educationSection:educationReducer,
    document:documentReducer,
    auth:authReducer,
    firebase:firebaseReducer,
    firestore:firestoreReducer,

})

export default rootReducer;