import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
    };
  }

  onInputChanged = (event) => {
    // this.state.message = event.target.value; not good enough. use "setstate"
    this.setState({
      message: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>

        <input
          type="text"
          onChange={this.onInputChanged}
          value={this.state.message}
          name="message"
          id="message"
        />
        <p> {this.props.maxChars - this.state.message.length} </p>
      </div>
    );
  }
}

export default TwitterMessage;
