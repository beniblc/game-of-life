import React, { Component } from 'react';
import { connect } from 'react-redux';

class GameBoard extends Component {

  constructor(props) {
    super(props);

    this.state={
      time: 1,
      status: false,
      board: this.props.board
    };
  }

  tick = () => this.setState({time: this.state.time + 1 });
  
  stop = () => clearInterval(this.interval) || this.setState({ time: 0, status: false });
  start = () => this.setState({board: this.runSimulation(this.state.board)}) | this.setState({status: true} | console.log(this.state.board[1]));

  changeStatus = (row, col) => {
    var holder = this.state.board;
      holder[1][row][col].live == false ? holder[1][row][col].live = true : holder[1][row][col].live = false;
      this.setState({ board: holder }); 
    
  }

  runSimulation = (dataSet) => { 
    
    var counter = (data, row, col) => {

      var count = 0;

      var valCheck = (val, row, col) => {
        var check = false;
        val[row] == undefined ? check = true 
        : val[row][col] == undefined ? check = true : '';
        return check;
      }

      valCheck(data, (row-1), (col-1)) == false ? data[row-1][col-1].live == 1 ? count++ : '' : '';
      valCheck(data, (row-1), (col)) == false ? data[row-1][col].live == 1 ? count++ : '' : '';
      valCheck(data, (row-1), (col+1)) == false ? data[row-1][col+1].live == 1 ? count++ : '' : '';
      valCheck(data, (row), (col-1)) == false ? data[row][col-1].live == 1 ? count++ : '' : '';
      valCheck(data, (row), (col+1)) == false ? data[row][col+1].live == 1 ? count++: '' : '';
      valCheck(data, (row+1), (col-1)) == false ? data[row+1][col-1].live == 1 ? count++ : '' : ''; 
      valCheck(data, (row+1), (col)) == false ? data[row+1][col].live == 1 ? count++ : '' : '';
      valCheck(data, (row+1), (col+1)) == false ? data[row+1][col+1].live == 1 ? count++ : '' : '';

      return count;
    }

    var holder = this.state.board;
    console.log('starting');
    for(var i=0;i<holder[0].rows;i++) {
      for(var j=0;j<holder[0].cols;j++) {
        var count = counter(holder[1], i, j);       
        //console.log(i +  ',' + j + ': ' + count + ', ' + holder[1][i][j].live);
        if(this.state.board[1][i][j].live==false) {}
      } 
    }
  }

  render() {    
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
        <button onClick={() => this.state.status == false ? this.runSimulation(this.state.board) : ''}>start</button>
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


