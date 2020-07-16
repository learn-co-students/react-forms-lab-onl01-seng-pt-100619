import React from "react";
import PropTypes from 'prop-types' 

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
        username: '',
        password: ''
    };
  }

  handleInputChange = event => {
    const {name, value} = event.target 
    this.setState({ 
      [name]: value,
    })
  }

  handleSubmit = event => { 
    event.preventDefault();
     let formData ={ 
       username: this.state.username,
       password: this.state.password 
     }
      if (formData.username != "" && formData.password !=""){
        this.props.handleLogin(formData)
      }  
  }

  render() {
    return (
      <form onSubmit= {event => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input
             id="username" 
             name="username"
             type="text"
             value={this.state.username}
             onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
             id="password"
             name="password"
             type="password" 
             value={this.state.username}
             onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

LoginForm.propTypes = { 
  onSubmit: PropTypes.func,
}

export default LoginForm;
