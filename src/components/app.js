import React from 'react';
import { Component } from 'react';

import GameBoard from '../containers/game-board';

export default class App extends Component {
  render() {
    return (
      <div>
        <GameBoard />
      </div>
    );
  }
}