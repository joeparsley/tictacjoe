import React, { Component } from 'react';

const SQUARES = [
  {
    className: 'square',
    position: '1A',
    play: [],
  },
  {
    className: 'square',
    position: '1B',
    play: [],
  },
  {
    className: 'square',
    position: '1C',
    play: [],
  },
  {
    className: 'square',
    position: '2A',
    play: [],
  },
  {
    className: 'square',
    position: '2B',
    play: [],
  },
  {
    className: 'square',
    position: '2C',
    play: [],
  },
  {
    className: 'square',
    position: '3A',
    play: [],
  },
  {
    className: 'square',
    position: '3B',
    play: [],
  },
  {
    className: 'square',
    position: '3C',
    play: [],
  },
];

class Board extends Component {
  state = {
    board: SQUARES,
    turn: true,
  };

  playerTurn(index) {
    if ( this.state.turn === true ) {
      this.state.board[index].play.push('X');
      this.setState({
        turn: !this.state.turn,
      });
    } else if ( this.state.turn === false ) {
        this.state.board[index].play.push('O');
        this.setState({
          turn: !this.state.turn,
        });
    }
  }

  render() {
    const squares = this.state.board;
    const whosTurn = this.state.turn ? "player #1 it's your turn" : "player #2 It's your turn";
    return (
      <div className="board-container">
        <h2>Check out this sweet tic tac toe game</h2>
        <h3>{whosTurn}</h3>
        <div className="board">
          {
            squares.map(function(item, i) {
              return (
                <div key={i} className={item.className} onClick={this.playerTurn.bind(this, i)}>{item.play}</div>
              );
            }.bind(this))
          }
        </div>
      </div>
    );
  }
}

export default Board;

