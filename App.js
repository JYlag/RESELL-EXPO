import React, { Component } from 'react';
import reducers from './src/reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import LoginForm from "./src/components/LoginForm";
import firebase from 'firebase';
import Router from './src/Router';


class App extends Component {

    componentDidMount() {
        const config = {
            apiKey: "AIzaSyBfuZLrRkNA6UtT5KnizREXTZVP_EXLFkc",
            authDomain: "resell-c0658.firebaseapp.com",
            databaseURL: "https://resell-c0658.firebaseio.com",
            projectId: "resell-c0658",
            storageBucket: "resell-c0658.appspot.com",
            messagingSenderId: "797886010454"
        };

        firebase.initializeApp(config);
    }

    render() {

         const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

         return(
           <Provider store={store}>
               <Router/>
           </Provider>
        );
    }
}

export default App;