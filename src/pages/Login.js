import React from 'react';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { addUser } from '../redux/actions';

const number6 = 6;

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    disabled: true,
  };

  handleEmail = (event) => {
    const { value } = event.target;

    this.setState({ email: value }, () => {
      this.handleLogin();
    });
  };

  handlePassword = (event) => {
    const { value } = event.target;

    this.setState({ password: value }, () => {
      this.handleLogin();
    });
  };

  handleLogin = () => {
    const { email, password } = this.state;

    const regexForEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const disabled = !(regexForEmail.test(email) && password.length >= number6);
    this.setState({ disabled });
  };

  render() {
    const { dispatch } = this.props;

    const { email, password, disabled } = this.state;

    return (
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={ email }
            data-testid="email-input"
            required
            placeholder="insira o email"
            onChange={ this.handleEmail }
          />
        </label>
        <label>
          Senha:
          <input
            type="password"
            name="senha"
            value={ password }
            data-testid="password-input"
            onChange={ this.handlePassword }
          />
        </label>
        <Link to="./carteira">
          <button
            type="submit"
            label="Entrar"
            disabled={ disabled }
            onClick={ () => dispatch(addUser(email)) }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Login);
