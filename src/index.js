import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux"
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./Reducers/rootReducer";
import { FirebaseReducer } from 'react-redux-firebase';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore, createFirestoreInstance } from 'redux-firestore';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD0yIXLeIlQ1MPD1k_Mdvys06CdnMop0dU",
  authDomain: "resume-builder-ae120.firebaseapp.com",
  projectId: "resume-builder-ae120",
  storageBucket: "resume-builder-ae120.appspot.com",
  messagingSenderId: "862117652334",
  appId: "1:862117652334:web:d4afdbadff90b2e77c037f",
  measurementId: "G-2VF88G9M48"
};

 firebase.initializeApp(firebaseConfig);
firebase.firestore();

const reduxStore = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})), reduxFirestore(firebase)
));


ReactDOM.render(
  <Provider store={reduxStore}>
    <BrowserRouter>
      <ReactReduxFirebaseProvider
        firebase={firebase}
        config={firebaseConfig}
        dispatch={reduxStore.dispatch}
        createFirestoreInstance={createFirestoreInstance}>
        <App />
      </ReactReduxFirebaseProvider>

    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
