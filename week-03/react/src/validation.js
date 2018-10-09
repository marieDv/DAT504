import React, { Component } from 'react';

class Form extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: '',
      formErrors: '',
      emailValid: '',
      passwordValid: '',
      validForm: false,
    }
  }
  componentDidMount(){

  }
  handleInput(event, string){
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]: value});

  let fieldErrors = this.state.formErrors;
  let validEmail = this.state.emailValid;
  let validPassw = this.state.passwordValid;
if(string === "email"){
  validEmail = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
  fieldErrors.email = validEmail ? '' : ' is invalid';
}else {
  validPassw = value.length >= 9;
     fieldErrors.password = validPassw ? '': 'choose a longer password';
}
this.setState({formErrors: fieldErrors, emailValid: validEmail, passwordValid: validPassw , validForm: true})
}
  render () {
    return (<div>
      <form className="demoForm">
      <h2>Sign up</h2>
       <div className="form-group">
         <label htmlFor="email">Email address</label>
         <input type="email" value={this.state.email}
         onChange={(event) => this.handleInput(event, "email")} className="form-control"
           name="email" />
       </div>
       <div className="form-group">
         <label htmlFor="password">Password</label>
         <input type="password" value={this.state.password}
          onChange={(event) => this.handleInput(event, "password")}
         className="form-control"
           name="password" />
       </div>
       <button type="submit" className="btn btn-primary">
          Sign up
       </button>
      </form>

      </div>
)}
}

export default Form;
