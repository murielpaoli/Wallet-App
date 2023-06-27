import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  sumAskInExpenses = () => {
    const { expenses } = this.props;
    let result = 0;
    expenses.forEach((expense) => {
      const { exchangeRates } = expense;
      const { currency } = expense;
      // console.log(exchangeRates);
      // console.log(currencies);
      if (currency in exchangeRates) {
        const ask = parseFloat(exchangeRates[currency].ask);
        const value = parseFloat(expense.value);
        const multiplicacao = value * ask;
        result += multiplicacao;
      }
    });
    return result.toFixed(2);
  };

  render() {
    const { email } = this.props;
    return (
      <div>
        <div>
          <p data-testid="email-field">{email}</p>
          <p data-testid="total-field">
            {this.sumAskInExpenses()}
          </p>
          <p data-testid="header-currency-field">BRL</p>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    exchangeRates: PropTypes.shape({
      ask: PropTypes.string,
    }),
    currency: PropTypes.string,
  })).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
