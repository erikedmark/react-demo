import React, { useState, useEffect, useRef, useImperativeHandle } from "react";
import ReactDOM from 'react-dom';
import './stock_view.css';
import Chart from './chart.js';
import Message from './Message.js';

export default function StockView(props) {

  const [chartVisible, setChartVisible] = useState(true);

  const [errorMessage, setErrorMessage] = useState("");

  const stockChartRef = useRef();

  function increase() {
    if (stockChartRef.current) {
      stockChartRef.current.increase()
    } else {
      setErrorMessage("Stock chart is not avaliable");
    }
  }

  function decrease() {
    if (stockChartRef.current) {
      stockChartRef.current.decrease()
    } else {
      setErrorMessage("Stock chart is not avaliable");
    }
  }

  function toggleChart() {
    setChartVisible(!chartVisible);
  }

  function renderChart() {
    return chartVisible ? <Chart ref={stockChartRef} /> : undefined;
  }

  function removeMessage() {
    setErrorMessage("")
  }

  function renderMessage() {
    return errorMessage ? <Message type="error" onRemove={removeMessage}>{errorMessage}</Message> : undefined;
  }

  return (
    <div>
      {renderChart()}
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={toggleChart}>{chartVisible ? "Hide chart" : "Show chart"}</button>
      {renderMessage()}
    </div>
  );

}