import React from 'react';
import {createContext, useContext, useReducer} from 'react';
export const StateContext = createContext();
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

// hook that pulls info
export const useStateValue = () => useContext(StateContext);