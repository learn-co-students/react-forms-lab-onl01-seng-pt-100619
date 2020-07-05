import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    let numChar = ( this.props.maxChars - this.state.message.length)
    return (
      <div>
        <pre>Your message:</pre>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.message}/>
        <pre>Chars:</pre>
        <p>{numChar}, {this.state.message}</p>
      </div>
    );
  }

}

export default TwitterMessage;
