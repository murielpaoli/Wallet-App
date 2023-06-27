import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { fetchApi, getExpenses } from '../redux/actions/index';

class WalletForm extends Component {
  state = {
    id: 0,
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchApi());
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleExpenseSubmit = async () => {
    const { dispatch } = this.props;

    const exchangeRates = await dispatch(fetchApi());

    const forGlobalState = {
      ...this.state,
      exchangeRates,
    };

    dispatch(getExpenses(forGlobalState));

    this.setState((prev) => ({
      id: prev.id + 1,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    }));
  };

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <div>
        <label>
          Enter expense value:
          <input
            type="value"
            name="value"
            value={ value }
            data-testid="value-input"
            placeholder="digite aqui o valor da despesa!"
            onChange={ this.handleChange }
          />
        </label>
        <label>
          Enter description:
          <input
            name="description"
            value={ description }
            type="text"
            data-testid="description-input"
            onChange={ this.handleChange }
          />
        </label>
        <label>
          Currencies:
          <select
            data-testid="currency-input"
            onChange={ this.handleChange }
            value={ currency }
            name="currency"
          >
            {currencies
              .map((currencie) => (
                <option key={ currencie } value={ currencie }>
                  {currencie}
                </option>
              ))}
          </select>
        </label>
        <label>
          Método de pagamento
          <select
            data-testid="method-input"
            onChange={ this.handleChange }
            value={ method }
            name="method"
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label>
          Categoria da despesa
          <select
            data-testid="tag-input"
            onChange={ this.handleChange }
            value={ tag }
            name="tag"
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button
          type="submit"
          label="Entrar"
          onClick={ this.handleExpenseSubmit }
        >
          Adicionar despesa
        </button>
      </div>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatch: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});
export default connect(mapStateToProps)(WalletForm);
