import React, { Component } from 'react';

import { Button } from 'reactstrap';

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
      <div>
        the game has started
      </div>
    );
  }

  renderStartButton() {
    return(
      <div>
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