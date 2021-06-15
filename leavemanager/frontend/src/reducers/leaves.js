import { GET_LEAVES, DELETE_LEAVE, ADD_LEAVE } from '../actions/types.js'

const initialState = {
    something: 'text',
    leaves: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_LEAVES:
            return {
                ...state,
                leaves: action.payload
            };
        case DELETE_LEAVE:
            return {
                ...state,
                leaves: state.leaves.filter(leave => leave.id !== action.payload)
            }
        case ADD_LEAVE:
            return {
                ...state,
                leaves: [...state.leaves, action.payload]
            }
        default:
            return state;
    }
}