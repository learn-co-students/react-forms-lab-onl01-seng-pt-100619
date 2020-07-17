import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {twitMessage: ' '}
  };


  handleChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange} name="message" id="message" value={this.state.message}/>
        {characterLength}
      </div>
    );
  }
}

export default TwitterMessage;
