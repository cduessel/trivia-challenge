import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { handleSubmit, fetchToken, fetchQuestions } from '../actions'
import logo from '../logo.png';

const CryptoJS = require('crypto-js');

class PaginaInicial extends Component {
  constructor(props) {
    super(props);
    this.state = { nome: '', email: '', hash: '', clicked: false };
    this.nomeChange = this.nomeChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.cR = this.cR.bind(this);
    this.clickAPI = this.clickAPI.bind(this);
  }

  componentDidMount() {
    localStorage.setItem(
      'state',
      JSON.stringify({
        player: {
          name: '',
          assertions: 0,
          score: 0,
          gravatarEmail: '',
        },
      }),
    );
  }

  nomeChange(event) {
    this.setState({ nome: event.target.value });
  }

  emailChange(event) {
    this.setState({ email: event.target.value });
    const cryptoMail = CryptoJS.MD5(event.target.value).toString();
    this.setState({ hash: cryptoMail });
  }

  cR() {
    this.setState({ clicked: true });
  }

  clickAPI() {
    const { hC, chave, questions } = this.props;
    hC(this.state);
    chave().then(({ data }) => {
      questions(data);
      localStorage.setItem('token', data);
    });
    this.cR();
    localStorage.setItem(
      'state',
      JSON.stringify({
        player: {
          name: this.state.nome,
          assertions: 0,
          score: 0,
          gravatarEmail: this.state.email,
        },
      }),
    );
  }

  render() {
    const { clicked, email, nome } = this.state;
    const e = !email || !nome;
    if (clicked) return <Redirect to="/game" />;
    return (
      <div className="col">
        <img src={logo} alt="tryoutLogo" />  
        <Link to="/settings" data-testid="btn-settings" style={{color: "black"}}>
          Configurações
        </Link>
        <label htmlFor="nome" className="inputz">
          Name
          <input
            type="text"
            data-testid="input-player-name"
            value={this.state.nome}
            onChange={this.nomeChange}
            />
        </label>
        <label htmlFor="email" className="inputz">
          E-mail
          <input
            type="email"
            data-testid="input-gravatar-email"
            value={this.state.email}
            onChange={this.emailChange}
            />
        </label>
        <button data-testid="btn-play" disabled={e} onClick={() => this.clickAPI()} className="btn">PLAY!</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  hC: (login) => dispatch(handleSubmit(login)),
  chave: () => dispatch(fetchToken()),
  questions: (data) => dispatch(fetchQuestions(data)),
});

export default connect(null, mapDispatchToProps)(PaginaInicial);

PaginaInicial.propTypes = {
  hC: PropTypes.func.isRequired,
  chave: PropTypes.func.isRequired,
  questions: PropTypes.func.isRequired,
};
