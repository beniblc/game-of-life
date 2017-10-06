export default function() {

    //format of grid - {col: x, live: false}
    const makeGrid = (row, col) => {
        var grid =[];
        for (var i=1;i<=row;i++){
            var rowVal = []
            for(var k=1;k<=col;k++){
                rowVal.push({col:k, live: false})
            }
            grid.push(rowVal)
        }
        return grid;
    }

    return makeGrid(100, 70);  
}