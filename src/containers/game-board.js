import React, { Component } from 'react';
import { connect } from 'react-redux';

class GameBoard extends Component {
  render() {
    console.log(this.props.board[0])
    
    return (
      <div>
        <svg width="991" height="551">
          {
            this.props.board.map(
              (item , i) => (
                item.map(
                  (item2, j) => (
                    <rect
                      id={i}
                      key={j} 
                      width="10"
                      height="10"
                      x={(i*11)+1}
                      y={(j*11)+1}
                      style={item2.live == false ? {fill: 'gainsboro' }: {fill:'palegreen'} }
                      onClick={() => console.log(i + ' + ' + j) 
                      }
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


