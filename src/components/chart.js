import React, { useEffect, useImperativeHandle, useState, forwardRef, useContext } from "react";
import ReactDOM from 'react-dom';
import { store } from './store.js';
import './chart.css';
//
// Example of a function component.
// This component uses the forwardRef-hook wich will expose inner functionality to outer components.
//
const Chart = forwardRef((props, ref) => {
  //
  // Use a internal state.
  // This state is reset if the component unmounts.
  //
  const [count, setCount] = useState(0);
  //
  // Initialize the clobal context imported from the Store component.
  //
  const storeContext = useContext(store);
  //
  // This syntax stores the property dispatch from the storeContext object in a const.
  //
  const { dispatch } = storeContext;
  //
  // This will be the global state from the Store component.
  // This state is shared from the App component wich is the context provider.
  // The state survives if the component unmounts.
  //
  const globalState = storeContext.state;
  //
  // The useEffect hook is called when the component is successfully updated.
  // This very useful if you have dependencies in the DOM and need to know when the component is mounted.
  // See. componentDidMount for Class-components.
  //
  useEffect(() => {
    console.info("Chart component is ready!", globalState);
  });
  //
  // The useImperativeHandle is used to expose functionality to outer components.
  // The outer component can call the methods returned by the callback function.
  //
  useImperativeHandle(ref, () => ({
    increase: () => {
      dispatch({type: 'increaseCount'});
      setCount(count + 1);
    },
    decrease: () => {
      dispatch({type: 'decreaseCount'});
      dispatch({
        type: "append",
        property: "extra",
        value: (new Date().getTime())
      });
      setCount(count - 1);
    }
  }));

  const reset = () => {
    setCount(0);
    dispatch({type: 'reset'});
  };

  return (
    <div>
      <div className="chart">
        <img src="https://i.stack.imgur.com/bagYS.png"></img>
      </div>
      <div>Local counter: {count}</div>
      <div>Global counter: {globalState.count}</div>
      <button onClick={reset}>Reset</button>
    </div>
  );
});

export default Chart;