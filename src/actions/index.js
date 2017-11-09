import axios from 'axios';

export const ACTIVE_BOARD = 'active_board';

export function changeLive(board) {
    return {
        type: ACTIVE_BOARD,
        payload: board
    }
}