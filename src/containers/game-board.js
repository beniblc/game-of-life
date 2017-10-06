import React, { Component } from 'react';
import { connect } from 'react-redux';

class GameBoard extends Component {
  render() {
    console.log(this.props.board[0])
    
    return (
      <div>
        <svg width="601" height="421">
          {
            this.props.board.map(
              (item , i) => (
                item.map(
                  (item2, j) => (
                    <rect
                      key={j} 
                      width="5"
                      height="5"
                      x={(i*6)+1}
                      y={(j*6)+1}
                    />
                  )
                )
              )
            )
          }
        </svg>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    board: state.gridStatus
  }
}

export default connect(mapStateToProps)(GameBoard);


