import {ACTION} from './actions'
import GameEngine from './../engine/GameEngine'

interface Store {
    cells: Array<Array<number>>,
    isPaused: boolean
}

export const NUMBER_OF_CELLS = 121

const initState = {
    isPaused: true,
    cells: new Array(Math.sqrt(NUMBER_OF_CELLS)).fill(new Array(Math.sqrt(NUMBER_OF_CELLS)).fill(0))
} as Store

// const initState = {
//     cells: [
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
//         [0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     ]
// } as Store

export default (state = initState, action: any) => {
    switch (action.type) {
        case ACTION.MUTATE_CELLS:
            const newGeneration = GameEngine.mutateCells(state.cells)

            return {
                ...state,
                cells: newGeneration
            }

        case ACTION.TOGGLE_GAME:
            return {
                ...state,
                isPaused: action.value
            }

        default:
            return state;
    }
}
