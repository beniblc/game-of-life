import React, { Component } from 'react';
import { connect } from 'react-redux';

class GameBoard extends Component {

  tick = () => this.setState( {time: this.state.time + 1 });
  
  stop = () => clearInterval(this.interval) || this.setState({ time: 0, status: false });
  start = () => this.interval = this.setState({status: true}) || setInterval(this.tick, 1000);
  
  constructor() {
    super();

    this.state={
      time: 0,
      status: false
    };
  }

  render() {
    console.log(this.props.board);
    console.log(this.state.time);
    
    return (
      <div>
        <svg width="991" height="551">
          {
            this.props.board.map(
              (item , i) => ( // i is the col
                item.map(
                  (item2, j) => ( // j is the row
                    <rect
                      id={50*i+(j+1)}
                      key={j} 
                      width="10"
                      height="10"
                      x={(j*11)+1}
                      y={(i*11)+1}
                      style={item2.live == false ? {fill: 'gainsboro' }: {fill:'palegreen'} }
                      onClick={() => console.log(this.props.board[i][j].id)}
                    />
                  )
                )
              )
            )
          }
        </svg>
        <button onClick={() => this.start()}>start</button>
        <button onClick={() => this.stop()}>stop</button>
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


