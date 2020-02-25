import React from "react";
import ReactDOM from 'react-dom';
import { store } from './store.js';
import './message.css';
//
// This is a Class component extending the React Component interface.
//
export default class Message extends React.Component {
  //
  // Support for static class properties
  // If the contextType property is set, the context property will avaliable.
  //
  static contextType = store;
  //
  // Constructor
  //
  constructor() {
    super();
    this.state = {
      info: ""
    };
    // console.log(this.context.state);
    // The context property will be undefined as this point.
  }
  //
  // Will be called once, when the component is mounted.
  //
  componentWillUnmount() {
    console.info("Message unmounted!");
  }
  //
  // Whill be called once, when the component is successfully mounted in the DOM.
  //
  componentDidMount() {
    console.info("Message mounted!");
    console.log(this.context.state);
  }
  //
  // Will be called, when the component updates.
  //
  componentDidUpdate() {
    console.info("Message updated!");
    console.log(this.context.state);
  }
  //
  //  Update components info-text
  //
  update() {
    //
    // Update components internal state.
    // This will trigger re-render.
    //
    this.setState({
      info: "Komponenten uppdaterades"
    });
  }
  //
  // Render method.
  // This is called every time the components state is updated.
  //
  render() {
    const { type, onRemove, children } = this.props;
    const { info } = this.state;
    return (
      <div className="message">
        <div onClick={onRemove} className={type}>{children}</div>
        <div><button onClick={this.update.bind(this)}>Uppdatera</button></div>
        <div>{info}</div>
        <div>Count: {this.context.state.count}</div>
      </div>
    )
  }
}