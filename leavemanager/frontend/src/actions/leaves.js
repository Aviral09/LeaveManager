import axios from 'axios'
import { GET_LEAVES, DELETE_LEAVE, ADD_LEAVE } from './types'

//GET_LEAVES
export const getLeaves = () => dispatch => {
    axios.get('/api/leaves/')
        .then(res => {
            dispatch({
                type: GET_LEAVES,
                payload: res.data
            })
        }).catch(err => console.log(err))
}

//DELETE_LEAVE
export const deleteLeave = (id) => dispatch => {
    axios.delete(`/api/leaves/${id}`)
        .then(res => {
            dispatch({
                type: DELETE_LEAVE,
                payload: id
            })
        }).catch(err => console.log(err))
}

//ADD_LEAVE
export const addLeave = (leave) => dispatch => {
    axios.post('/api/leaves/', leave)
        .then(res => {
            dispatch({
                type: ADD_LEAVE,
                payload: res.data
            })
        }).catch(err => console.log(err))
}