import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import contactReducer from './store/reducers/contactForm';
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
    contact: contactReducer
})

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
))

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
