import axios from 'axios'

const initialState = {
    Text: {}
}

const UPDATE_TEXT = 'UPDATE_TEXT'
const GET_TEXT = 'GET_TEXT'
const SAVE_TEXT = 'SAVE_TEXT'
const GET_ID = 'GET_ID'
const EDIT_TEXT = "EDIT_TEXT"
export function updateText(Text){
    return{
        type: UPDATE_TEXT,
        payload: {Text}
    }
}
export const getPrivate = () => {
    let data = axios.get('/auth/getPrivate')
                    .then(res => res.data)
                    console.log(data)
    return {
        type: GET_TEXT,
        payload: data
    }
}

export const getId = () => {
    let data = axios.get('/auth.get')
    .then(res => res.data)
    console.log(data)
    return{
        type: GET_ID,
        payload: data
    }
}

export const addPrivate = (title, content)=> {
    let data = axios.post('/auth/addPrivate', {title, content})
    .then(res => res.data)
    return{
        type: SAVE_TEXT,
        payload: data
    }
}
export const editPrivate = (title, content)=> {
    let data = axios.put('/auth.editPrivate/id', {title, content})
    .then(res => res.data)
    return{
        type: EDIT_TEXT,
        payload: data
    }
}
export default function reducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case GET_TEXT + "_FULFILLED":
            return{text:payload}
        case GET_ID + "_FULFILLED":
            return{text:payload}
        case SAVE_TEXT:
            return {text:payload}
        case EDIT_TEXT + "_FULFILLED":
            return{text:payload}
            default:
                return state;
    }
}