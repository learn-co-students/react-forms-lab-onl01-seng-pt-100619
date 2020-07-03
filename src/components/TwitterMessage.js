import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chars: this.props.maxChars,
      message: ''
    };
  }

  updateChars = (event) => {
    // let counter = this.state.chars

    if(event.target.value.length < this.state.message.length){
      // console.log('+1')
      this.setState(previousState => {
        return {chars: previousState.chars + 1} //return keyword makes the update state work ?creates a closure?
      })
    } else if(event.target.value.length > this.state.message.length){
      // console.log('-1')
      this.setState(previousState => {
        return {chars: previousState.chars - 1}
      })
    }

    this.setState({
      message: event.target.value
    })
    // console.log(this.state.message)
    // console.log(this.state.chars)

  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={event => this.updateChars(event)} value={this.state.message}type="text" name="message" id="message" />
        <p>{this.state.chars} characters remaining</p>
      </div>
    );
  }
}

export default TwitterMessage;
