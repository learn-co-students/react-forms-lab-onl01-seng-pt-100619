import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  remainingCharacters = () => {
    return <p>{this.props.maxChars - this.state.value.length}</p>
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          value={this.state.value}
          onChange={event => {this.handleChange(event)}}
          type="text"
          name="message"
          id="message" />
          {this.remainingCharacters()}
      </div>
    );
  }
}

export default TwitterMessage;
