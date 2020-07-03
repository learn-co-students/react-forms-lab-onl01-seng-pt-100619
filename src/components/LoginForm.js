import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  handleUsernameInputChange = (event) => {
  
    this.setState({
      username: event.target.value
    })
    // console.log(this.state.username)
  }

  handlePasswordInputChange = (event) => {
  
    this.setState({
      password: event.target.value
    })
    // console.log(this.state.username)
  }

  handleSubmit = (event) => { // always send event listener to same class and then callback parent class function from here
    event.preventDefault()
    if(this.state.username !== '' && this.state.password !== ''){
      this.props.handleLogin(this.state)
    }
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input value={this.state.username} onChange={this.handleUsernameInputChange} id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input value={this.state.password} onChange={this.handlePasswordInputChange} id="password" name="password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
