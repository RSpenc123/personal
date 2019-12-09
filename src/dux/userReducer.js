import axios from 'axios'

const initialState = {
    User: {}
}

const UPDATE_USER = 'UPDATE_USER'
const GET_USER = 'GET_USER'

export function updateUser(User){
    return{
        type: UPDATE_USER,
        payload: User
    }
}

export const getUser = () => {
    let data = axios.get('/auth/getUser')
    .then(res => res.data)
    return {
        type: GET_USER,
        payload: initialState.User
    }
}


export default function reducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case UPDATE_USER:
            return{...state, User: payload}
        case GET_USER:
            return{User:payload}
            default:
                return state;
    }
}