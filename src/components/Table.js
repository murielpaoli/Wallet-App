import React, { Component } from 'react';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { deleteWallet } from '../redux/actions';

class Table extends Component {
  covertedValue = (exp) => {
    const { exchangeRates } = exp;

    const { currency } = exp;

    const ask = parseFloat(exchangeRates[currency].ask);

    const result = ask * exp.value;

    return result.toFixed(2);
  };

  handleDeleteButton = (expId) => {
    const { dispatch } = this.props;

    dispatch(deleteWallet(expId));
  };

  render() {
    const { expenses } = this.props;

    return (
      <table>
        <thead>
          <tr>

            <th>Descrição</th>

            <th>Tag</th>

            <th>Método de pagamento</th>

            <th>Valor</th>

            <th>Moeda</th>

            <th>Câmbio utilizado</th>

            <th>Valor convertido</th>

            <th>Moeda de conversão</th>

            <th>Editar/Excluir</th>

          </tr>
        </thead>
        <tbody>
          {expenses.map((exp) => (
            <tr key={ exp.id }>

              <td>{exp.description}</td>

              <td>{exp.tag}</td>

              <td>{exp.method}</td>

              <td>{Number(exp.value).toFixed(2)}</td>

              <td>{exp.exchangeRates[exp.currency].name}</td>

              <td>{Number(exp.exchangeRates[exp.currency].ask).toFixed(2)}</td>

              <td>{this.covertedValue(exp)}</td>

              <td>Real</td>

              <td>
                <button
                  data-testid="delete-btn"
                  onClick={ () => this.handleDeleteButton(exp.id) }
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    exchangeRates: PropTypes.shape({
      ask: PropTypes.string,
    }),
    currency: PropTypes.string,
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
