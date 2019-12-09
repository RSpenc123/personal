import axios from 'axios'

const initialState = {
    Text: {}
}

const UPDATE_TEXT = 'UPDATE_TEXT'
const GET_TEXT = 'GET_TEXT'
const GET_TEXTT = 'GET_TEXTT'

const SAVE_TEXT = 'SAVE_TEXT'
const GET_ID = 'GET_ID'
const EDIT_TEXT = "EDIT_TEXT"
const DELETE_TEXT = "DELETE_TEXT"
export function updateText(Text){
    return{
        type: UPDATE_TEXT,
        payload: {Text}
    }
}
export const getPrivate = (id) => {
    let data = axios.get(`/auth/getPrivate/${id}`)
                    .then(res => res.data)
                    console.log(data)
    return {
        type: GET_TEXT,
        payload: data
    }
}
export const getPrivateText = () => {
    let data = axios.get('/auth/getPrivateText')
                    .then(res => res.data)
                    console.log(data)
    return {
        type: GET_TEXTT,
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

export const addPrivate = (title, content, user_id)=> {
    let data = axios.post('/auth/addPrivate', {title, content, user_id})
    .then(res => res.data)
    return{
        type: SAVE_TEXT,
        payload: data
    }
}
export const editPrivate = (id,title, content)=> {
    let data = axios.put(`/auth/editPrivate/${id}`, {title, content})
    .then(res => res.data)
    return{
        type: EDIT_TEXT,
        payload: data
    }
}
export const deletePrivate = (id)=> {
    let data = axios.delete(`/auth/deletePrivate/${id}`)
    .then(res => res.data)
    return{
        type: DELETE_TEXT,
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
        case DELETE_TEXT + "_FULFILLED":
            return{text:payload}
        case GET_TEXTT + "_FULFILLED":
            return{text:payload}
            default:
                return state;
    }
}