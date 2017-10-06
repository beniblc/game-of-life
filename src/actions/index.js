export function gridSelect(grid) {
    //SelectBook is an ActionCreator, it needs to return an action, an object with a type property
    return {
        type: 'GRID_MADE', 
        payload: grid
    };
}