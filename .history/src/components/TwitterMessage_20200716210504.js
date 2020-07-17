
// class TwitterMessage extends React.Component {
//   constructor() {
//     super();

//     this.state = {twitMessage: ' '}
//   };


//   handleChange = event => {
//     this.setState({
//       message: event.target.value
//     })
//   }

//   render() {
//     return (
//       <div>
//         <strong>Your message:</strong>
//         <input type="text" onChange={this.handleChange} value={this.state.message} name="message" id="message" />
//         {characterLength}
//       </div>
//     );
//   }
// }

import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    let charNumber = this.props.maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange} value={this.state.message}/>
        {charNumber}
      </div>
    );
  }
}

export default TwitterMessage;

