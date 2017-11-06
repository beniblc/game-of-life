import React, { Component } from 'react';
import { connect } from 'react-redux';

class GameBoard extends Component {

  tick = () => this.setState( {time: this.state.time + 1 });

  stop = () => clearInterval(this.interval) || this.setState({ time: 0 });
  start = () => this.interval = setInterval(this.tick, 1000);
  
  constructor() {
    super();

    this.state={
      time: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  render() {
    console.log(this.props.board[0]);
    console.log(this.state.time);
    
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
                      onClick={() => console.log(i + ' + ' + j)}
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


