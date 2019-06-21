import React from "react";

export default class Modal extends React.Component {
  render() {
    return (
      <div>
        <h3>Selected Character: {this.props.children} </h3>
      </div>
    );
  }
}
