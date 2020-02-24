import React from "react";
import ReactDOM from 'react-dom';

export default class ErrorMessage extends React.Component {

  constructor() {
    super();
  }

  componentWillUnmount() {
    console.info("Message unmounted!");
  }

  componentDidMount() {
    console.info("Message mounted!");
  }

  render() {
    const {type} = this.props;

    return (
      <div className="message">
        <div onClick={this.props.onRemove} className={type}>{this.props.children}</div>
      </div>
    )
  }

}