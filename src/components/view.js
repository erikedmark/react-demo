import React, { useState, useEffect, useRef, useImperativeHandle } from "react";
import ReactDOM from 'react-dom';
import './view.css';
import Chart from './chart.js';
import Message from './Message.js';
//
// Example of a function component, using hooks to implement stuff as 'state' and 'refs'.
// A hook is imported from the react module on the form 'use...'
//
export default function View(props) {
  //
  // Initialize local state property componentVisible
  //
  const [componentVisible, setComponentVisible] = useState(true);
  //
  // Initialize local state property errorMessage
  //
  const [errorMessage, setErrorMessage] = useState("");
  //
  // Initialize ref-hook
  //
  const chartRef = useRef();
  //
  // Call increase method on the chart-component
  //
  function increase() {
    if (chartRef.current) {
      chartRef.current.increase()
    } else {
      setErrorMessage("Chart is not avaliable 😠");
    }
  }
  //
  // Call decrease method on the chart-component
  //
  function decrease() {
    if (chartRef.current) {
      chartRef.current.decrease()
    } else {
      setErrorMessage("Chart is not avaliable 😠");
    }
  }
  //
  // Hide the chart component
  //
  function toggleChart() {
    setComponentVisible(!componentVisible);
  }
  //
  // Render the chart component
  // If it´s hidden, the component will unmount, hence the undefined return value.
  //
  function renderChart() {
    return componentVisible ? <Chart ref={chartRef} /> : undefined;
  }
  //
  // Remove (unmount) error message by unsetting its value.
  //
  function removeMessage() {
    setErrorMessage("")
  }

  function renderMessage() {
    //
    // Render error message, if it has a truty value.
    // The attributes on a component ie type="error" will be avaliable in the component as this.props.
    //
    return errorMessage ? <Message type="error" onRemove={removeMessage}>{errorMessage}</Message> : undefined;
  }
  //
  // Render the component
  //
  return (
    <div className="view">
      {renderChart()}
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={toggleChart}>{componentVisible ? "Umount chart" : "Mount chart"}</button>
      {renderMessage()}
    </div>
  );
}