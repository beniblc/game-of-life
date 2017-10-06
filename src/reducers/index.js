import { combineReducers } from 'redux';
import GridStatus from './reducer_game_grid';

const rootReducer = combineReducers({
  gridStatus: GridStatus
});

export default rootReducer;
