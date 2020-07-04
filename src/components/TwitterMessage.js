import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      text: '',
      //counter: 0
    };
  }

  updateText(event) {
    this.setState({
      text: event.target.value
      //counter: this.props.maxChars -  this.state.text.length
    })
  }

  render() {
    let counter = this.props.maxChars -  this.state.text.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.text} onChange={ event => this.updateText(event)}/>
        <h1>Remaining Characters {counter}</h1>
      </div>
    );
  }
}

export default TwitterMessage;
