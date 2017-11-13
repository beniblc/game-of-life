import React, { Component } from 'react';
import { connect } from 'react-redux';

class GameBoard extends Component {

  constructor(props) {
    super(props);

    this.state={
      status: false,
      board: this.props.board,
      generation: 0
    };
  }

  stop = () => clearInterval(this.timerId) | this.setState({status: false})
  start = () => !this.timerId ? this.timerId = this.setState({status: true, generation: 0}) | setInterval(this.runSimulation, 500)
                : this.timerId = setInterval(this.runSimulation, 500) | this.setState({status: true})

  changeStatus = (row, col) => {
    var holder = this.state.board;
      holder[1][row][col].live == false ? holder[1][row][col].live = true : holder[1][row][col].live = false;
      this.setState({ board: holder });  
  }

  runSimulation = () => { 
    
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

    var holder = [];
    holder.push(this.state.board[0])
    holder.push([]);
    console.log('starting');
    for(var i=0;i<this.state.board[0].rows;i++) {
      holder[1].push([]);
      for(var j=0;j<this.state.board[0].cols;j++) {
        var count = counter(this.state.board[1], i, j);       
        if(this.state.board[1][i][j].live==false) {
          if(this.state.status == false){holder[1][i].push({id: this.state.board[1][i][j].id, live: false});}
          else if(count===3){holder[1][i].push({id: this.state.board[1][i][j].id, live: true});}
          else{holder[1][i].push({id: this.state.board[1][i][j].id, live: false});}
        }
        else{
          if(this.state.status == false){holder[1][i].push({id: this.state.board[1][i][j].id, live: false});}
          else if (count > 1 && count<=3) {holder[1][i].push({id: this.state.board[1][i][j].id, live: true});}
          else{holder[1][i].push({id: this.state.board[1][i][j].id, live: false});}
        }
      } 
    }
    this.state.status == true? this.setState({board: holder, generation: this.state.generation + 1})
    : this.setState({board: holder, generation: 0})
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
        <button onClick={() => this.state.status == false ? this.start() : ''}>start</button>
        <button onClick={() => this.stop()}>stop</button>
        <button onClick={() => this.state.status == false ? this.runSimulation(): ''}>clear</button>
        <div>{this.state.generation}</div>
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