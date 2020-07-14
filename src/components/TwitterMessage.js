import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  updateMessage = event => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    let charCounter = this.props.maxChars - this.state.message.length

    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={ event => this.updateMessage(event) }/>
        <p>{charCounter} characters left</p>
      </div>
    );
  }
}

export default TwitterMessage;
