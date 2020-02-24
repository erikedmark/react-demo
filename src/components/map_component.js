import React, { useState, useEffect, useRef, useImperativeHandle } from "react";
import ReactDOM from 'react-dom';
import './map_component.css';
import Map from './map.js';

export default function MapComponent(props) {

  function zoomIn() {
    mapComponentRef.current.zoomIn()
  }

  function zoomOut() {
    mapComponentRef.current.zoomOut()
  }

  const mapComponentRef = useRef();

  return (
    <div>
      <Map ref={mapComponentRef}></Map>
      <button onClick={zoomIn}>+</button>
      <button onClick={zoomOut}>-</button>
    </div>
  );

}