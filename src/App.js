import React from 'react';
// import logo from './trivia.png';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import PaginaInicial from './pages/PaginaInicial';
import TelaJogo from './pages/TelaJogo';
import Configuracoes from './pages/Configuracoes';
import Feedback from './pages/Feedback';
import Ranking from './pages/Ranking';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={PaginaInicial} />
          <Route path="/game" component={TelaJogo} />
          <Route path="/settings" component={Configuracoes} />
          <Route path="/feedback" component={Feedback} />
          <Route path="/ranking" component={Ranking} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
