import React, { useEffect, useImperativeHandle, useState, forwardRef } from "react";
import ReactDOM from 'react-dom';

const StockChart = forwardRef((props, ref) => {

  const [count, setCount] = useState(0);

  const [text, setText] = useState("This is a demo");

  useEffect(() => {
    console.info("Stock chart component is ready!");
  });

  useImperativeHandle(ref, () => ({
    increase: () => {
      setCount(count + 1);
    },
    decrease: () => {
      setCount(count - 1);
    }
  }));

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <div className="stock-chart">Stock chart</div>
      <div>Counter: {count}</div>
      <button onClick={reset}>Reset</button>
    </div>
  );
});

export default StockChart;