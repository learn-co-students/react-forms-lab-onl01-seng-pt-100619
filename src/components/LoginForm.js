import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let username = this.state.username;
    let password = this.state.password;
    if(username.length > 0 && password.length > 0) {  
      // this.props.handleLogin(username, password)
      this.props.handleLogin(this.state)
    } else {
      console.log('Username and Password are required fields')
      return 
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleChange}/>
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
