import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      message: ""
    };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    let remainingChars = this.props.maxChars - this.state.message.length

    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleChange(event)} value={this.state.message} />
        <p>{this.state.message}</p>
        <p>Characters Remaining: {remainingChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
