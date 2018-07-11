import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			firstName: '',
			lastName: '',
			emailAddress: ''
		};
	}

	handleSubmit = e => {
		e.preventDefault();

		alert('submitting');
	};

	isSubmitDisabled = errors => {
		return Object.values(errors).some(errMsg => {
			return errMsg;
		});
	};

	validate = (firstName, lastName, emailAddress) => {
		const errors = {
			firstName: /^[a-zA-Z]+$/.test(firstName)
				? ''
				: 'you can have only alphabetic characters',
			lastName: /^[a-zA-Z]*$/.test(lastName)
				? ''
				: 'you can have only alphabetic characters',
			emailAddress: /^\w+@\w+\.\w{2,3}$/.test(emailAddress)
				? ''
				: 'an invalid email address'
		};

		return errors;
	};

	render() {
		const { firstName, lastName, emailAddress } = this.state;
		const errors = this.validate(firstName, lastName, emailAddress);

		return (
			<form className="App" onSubmit={this.handleSubmit}>
				<h1>Forms</h1>

				<label htmlFor="firstName">First name:</label>
				<input
					id="firstName"
					className={errors.firstName ? 'invalid' : ''}
					onChange={e => this.setState({ firstName: e.target.value })}
					value={firstName}
				/>
				<span className="err-msg">{errors.firstName}</span>

				<br />

				<label htmlFor="lastName">Last name:</label>
				<input
					id="lastName"
					className={errors.lastName ? 'invalid' : ''}
					onChange={e => this.setState({ lastName: e.target.value })}
					value={lastName}
				/>
				<span className="err-msg">{errors.lastName}</span>

				<br />

				<label htmlFor="emailAddress">Email:</label>
				<input
					id="emailAddress"
					className={errors.emailAddress ? 'invalid' : ''}
					onChange={e => this.setState({ emailAddress: e.target.value })}
					value={emailAddress}
				/>
				<span className="err-msg">{errors.emailAddress}</span>

				<br />

				<button type="submit" disabled={this.isSubmitDisabled(errors)}>
					submit
				</button>
			</form>
		);
	}
}

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: '',
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: '' });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.username) {
      return this.setState({ error: 'Username is required' });
    }

    if (!this.state.password) {
      return this.setState({ error: 'Password is required' });
    }

    return this.setState({ error: '' });
  }

  handleUserChange(evt) {
    this.setState({
      username: evt.target.value,
    });
  };

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }

  render() {

    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          {
            this.state.error &&
            <h3 data-test="error" onClick={this.dismissError}>
              <button onClick={this.dismissError}>✖</button>
              {this.state.error}
            </h3>
          }
          <label>User Name</label>
          <input type="text" data-test="username" value={this.state.username} onChange={this.handleUserChange} />

          <label>Password</label>
          <input type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} />

          <input type="submit" value="Log In" data-test="submit" />
        </form>
      </div>
    );
  }
}

export default LoginPage;
     
 

