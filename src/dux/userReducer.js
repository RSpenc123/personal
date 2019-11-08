import axios from 'axios'

const initialState = {
    User: {}
}

const UPDATE_USER = 'UPDATE_USER'

export function updateUser(User){
    return{
        type: UPDATE_USER,
        payload: {User}
    }
}

export default function reducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case UPDATE_USER:
            return{payload}
            default:
                return state;
    }
}