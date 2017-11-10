import React, { Component } from 'react';
import { connect } from 'react-redux';

class GameBoard extends Component {

  tick = () => this.setState({time: this.state.time + 1 });
  
  stop = () => clearInterval(this.interval) || this.setState({ time: 0, status: false });
  start = () => this.interval = this.setState({status: true}) | setInterval(this.runSimulation, 1000);

  changeStatus = (row, col) => {
    var holder = this.state.board;
      holder[1][row][col].live == false ? holder[1][row][col].live = true | console.log('yes') : holder[1][row][col].live = false | console.log('no');
      this.setState({ board: holder }); 
    
  }

  runSimulation = () => {
    var holder = this.state.board;
    for(var i=0;i<holder[0].rows;i++) {
      for(var j=0;j<holder[0].cols;j++) {
        if(holder[1][i][j].live == 1 ){  
          if(holder[1][i][j].id == 1) {
            console.log('top right corner: ' + holder[1][i][j].id);
            if(holder[1][i-1]==undefined) {console.log('no such thing')}
          }
          else if(holder[1][i][j].id === holder[0].cols*(holder[0].rows-1)+1){
            console.log('bottom left corner: '+ holder[1][i][j].id);
          }
          else if(holder[1][i][j].id === holder[0].cols){
            console.log('top right corner: '+ holder[1][i][j].id);
          }
          else if(holder[1][i][j].id === holder[0].cols*holder[0].rows){
            console.log('bottom right corner: '+ holder[1][i][j].id);
          }
          else if(holder[1][i][j].id%holder[0].cols === 1){
            console.log('left column: '+ holder[1][i][j].id);
          }
          else if(holder[1][i][j].id%holder[0].cols === 0){
            console.log('right column: '+ holder[1][i][j].id);
          }
          else if(holder[1][i][j].id <= holder[0].cols){
            console.log('top row: '+ holder[1][i][j].id);
          }
          else if(holder[1][i][j].id > holder[0].cols*(holder[0].rows-1)){
            console.log('bottom row: '+ holder[1][i][j].id);
          }
          else {
            console.log('middle cell: ' + holder[1][i][j].id);
          }
        }    
      }
    }
  }
  
  constructor(props) {
    super(props);

    this.state={
      time: 1,
      status: false,
      board: this.props.board
    };
  }

  render() {
    this.state.status == false ? console.log(this.state.board): '';
    this.state.status == true ? console.log(this.state.time) : '';
    
    return (
      <div>
        <svg width="991" height="551">
          {
            this.state.board[1].map(
              (item , i) => ( // i is the row
                item.map(
                  (item2, j) => ( // j is the col
                    <rect
                      id={this.state.board[0].row*i+(j+1)}
                      key={j} 
                      width="10"
                      height="10"
                      x={(j*11)+1}
                      y={(i*11)+1}
                      style={item2.live == false ? {fill: 'gainsboro' }: {fill:'palegreen'} }
                      onClick={() => this.state.status === false ? this.changeStatus(i,j) : ''}
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


