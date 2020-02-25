import React from 'react';
import ReactDOM from 'react-dom';
import View from './view.js';
import { StateProvider } from './store.js';
//
// Export a function component that implements a store through the Context API.
// The store can be imported and used by any child component.
// This is often used to persist information such as state across components.
//
export default function App() {
  return (
    <StateProvider>
      <View />
    </StateProvider>
  );
}