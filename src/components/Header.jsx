import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    const { nome, hash, placar } = this.props;
    return (
      <header className="header">
        <Link className="btn" data-testid="btn-go-home" to="/">Home</Link>
        <img
          data-testid="header-profile-picture"
          src={`https://www.gravatar.com/avatar/${hash}`}
          alt="foto de perfil"
          className="inputz"
        />
        <p data-testid="header-player-name" className="inputz">Player: {nome}</p>
        <p data-testid="header-score" className="inputz">Score: {placar}</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  nome: state.loginReducer.login.nome,
  hash: state.loginReducer.login.hash,
  placar: state.placarReducer.scoreR,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  nome: PropTypes.string.isRequired,
  hash: PropTypes.string.isRequired,
  placar: PropTypes.number.isRequired,
};
