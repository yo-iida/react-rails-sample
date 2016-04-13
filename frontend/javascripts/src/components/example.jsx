import React, { Component, PropTypes } from 'react';

export default class Example extends Component {
  render(){
    const { messages } = this.props;
    return(
      <div id="messages">
        <h1>{messages}</h1>
      </div>
    );
  }
}
