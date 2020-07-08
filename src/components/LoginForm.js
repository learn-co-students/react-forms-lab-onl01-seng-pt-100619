import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username:'',
      password:''
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    return (this.state.username && this.state.password) ? this.props.handleLogin(this.state.username, this.state.password) : null
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input
            id="username"
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
   />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
            id="password"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
   />
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
