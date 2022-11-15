import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import * as Students from './Students';
import { createForms } from 'react-redux-form';


export default function configureStore(history, initialState) {
    const reducers = {
        students: Students.reducer,
    };

    const middleware = [
        thunk,
        routerMiddleware(history)
    ];

    const initialStudentState = {
        username: '',
        firstName: '',
        lastName: '',
        age: 0,
        career: '',


    };


    // In development, use the browser's Redux dev tools extension if installed
    const enhancers = [];
    const isDevelopment = process.env.NODE_ENV === 'development';
    if (isDevelopment && typeof window !== 'undefined' && window.devToolsExtension) {
        enhancers.push(window.devToolsExtension());
    }

    const rootReducer = combineReducers({
        ...reducers,
        routing: routerReducer,
        ...createForms({
            studentUpdate: initialStudentState,
        })

    });

    return createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...middleware), ...enhancers),
    );

}

