import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    
    };
}


  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }


  

  render() {
    const remChars = this.props.maxChars - this.state.value.length

    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange} type="text" name="message" id="message" value={this.state.value} />
        <p>{remChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
