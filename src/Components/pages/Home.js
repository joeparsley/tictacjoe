import React, { Component } from 'react';

import { Button } from 'reactstrap';

import Board from '../Board';

class Home extends Component {

  state = {
    gameStart: false,
  };

  toggle() {
    this.setState({
      gameStart: !this.state.gameStart,
    });
  }

  renderGame() {
    return (
      <div className="game-container">
        <Board/>
      </div>
    );
  }

  renderStartButton() {
    return(
      <div className="start-game-container">
        <h1>Welcome to Tic-Tac-Joe!</h1>
        <h4>A web app built using ReactJS to show case my skills with this popular JavaScript Library</h4>
        <Button className="start-game-button" onClick={this.toggle.bind(this)}>Start Game!</Button>
      </div>
    );
  }

  render() {
    const isGameStarted = this.state.gameStart ? this.renderGame() : this.renderStartButton();
    return (
      <div className="home-container">
        {isGameStarted}
      </div>
    );
  }
}

export default Home;