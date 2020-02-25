import React, { createContext, useReducer } from 'react';
//
// Intialize a state that is shared across the application.
//
const initialState = {
  count: 0
};
//
// Create a new context using the Context API.
//
const store = createContext(initialState);
//
// Expose the Provider property from the store object.
//
const { Provider } = store;
//
// Export a reducer that acts as the global state manager.
// The reducer will be exposed through the Provider from the store context.
//
export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    //
    // Modify the state.
    // Remember, this is functional programming.
    // Return clones of objects instead of modifying existing ones.
    // The ... operator to create copies and merges of objects is very handy.
    //
    switch (action.type) {
      case 'increaseCount':
        return {
          count: state.count + 1
        };
      case 'decreaseCount':
        return {
          count: state.count - 1
        };
      case 'reset':
        return {
          count: 0
        };
      case 'append':
        return {
          [action.property]: action.value,
          ...state
        };
      default:
        throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store }