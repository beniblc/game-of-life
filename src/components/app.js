import React, { Component } from 'react';

export default class App extends Component {

  constructor() {
    super();

    this.state={grid: this.makeGrid(5,10)}
  }

  makeGrid = (row, col) => {
    var grid =[];
    for (var i=1;i<=row;i++){
      var rowVal = []
      for(var k=1;k<=col;k++){
        rowVal.push({col:k, live: false})
      }
      grid.push(rowVal)
    };
    return grid;
  }

  render() {
    console.log(this.state.grid)
    return (
      <div>
        <svg width="200" height="200">
          <rect width="5" height="5" />React simple starter
        </svg>
      </div>
    )
  }
}
