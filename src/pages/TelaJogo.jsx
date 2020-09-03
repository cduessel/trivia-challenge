import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Answers from '../components/Answers';

class TelaJogo extends Component {

  render() {
    const { perguntas, count } = this.props;
    if (count > 4) {
      return <Redirect to="/feedback" />;
    }
    return (
      <div className="game">
        <Header />
        {/* <h1>Tela de Jogo</h1> */}
        {perguntas[count] && (
          <div>
            <p data-testid="question-category">
              Category: {perguntas[count].category}
            </p>
            <p data-testid="question-text">
              Question: {perguntas[count].question}
            </p>
            <Answers />
          </div>
        )}
      </div>
    );
  }
}

const mapStatetoProps = (state) => ({
  perguntas: state.tokenReducer.questions,
  count: state.counterReducer.count,
});

export default connect(mapStatetoProps)(TelaJogo);

TelaJogo.propTypes = {
  perguntas: PropTypes.arrayOf(PropTypes.object).isRequired,
  count: PropTypes.number.isRequired,
};
