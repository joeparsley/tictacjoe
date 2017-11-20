import React, { Component } from 'react';

const SQUARES = [
  {
    className: 'square',
    postion: '1A',
  },
  {
    className: 'square',
    postion: '1B',
  },
  {
    className: 'square',
    postion: '1C',
  },
  {
    className: 'square',
    postion: '2A',
  },
  {
    className: 'square',
    postion: '2B',
  },
  {
    className: 'square',
    postion: '2C',
  },
  {
    className: 'square',
    postion: '3A',
  },
  {
    className: 'square',
    postion: '3B',
  },
  {
    className: 'square',
    postion: '3C',
  },
];


class Board extends Component {
  state = {
    board: SQUARES,
    turn: true,
  };

  handleClick() {
    alert("woahhh");
  }

  render() {
    const squares = this.state.board;
    const playerTurn = this.state.turn ? "player #1 it's your turn" : "player #2 It's your turn";
    return (
      <div className="board-container">
        <h2>Check out this sweet tic tac toe game</h2>
        <h3>{playerTurn}</h3>
        <div className="board">
          {
            squares.map(function(item, i) {
              return (
                <div key={i} className={item.className}></div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default Board;

