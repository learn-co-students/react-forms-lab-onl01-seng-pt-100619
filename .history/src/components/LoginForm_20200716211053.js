import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {username: ' ', password: ' ' };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })

  }

  render() {
    return (
      <form>
        <div>
          <label>
            Username
            <input id="username" onSubmit={this.handleLogin} name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" />
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
