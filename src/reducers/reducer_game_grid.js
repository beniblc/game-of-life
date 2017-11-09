import  { ACTIVE_BOARD } from '../actions';

export default function(action) {

    switch(state={}, action.type){
        case ACTIVE_BOARD:
            return action.payload;

        default: 
            //format of grid - {col: x, live: false}
            const makeGrid = (row, col) => {
                var grid =[];
                for (var i=0;i<row;i++){
                    var rowVal = []
                    for(var k=0;k<col;k++){
                        rowVal.push({id: (col*i+(k+1)), live: false})
                    }
                    grid.push(rowVal)
                }
                return grid;
            }
            return makeGrid(50, 90); 
    } 
}