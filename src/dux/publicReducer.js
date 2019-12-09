import axios from 'axios'

const initialState = {
    Text: {}
}

const UPDATE_PUBLIC = 'UPDATE_PUBLIC'
const GET_PUBLIC = 'GET_PUBLIC'
const SAVE_PUBLIC = 'SAVE_PUBLIC'
const GET_IDD = 'GET_IDD'
const EDIT_PUB = 'EDIT_PUB'
const DELETE_PUBLIC = "DELETE_PUBLIC"

export function updateText(Text){
    return{
        type: UPDATE_PUBLIC,
        payload: {Text}
    }
}
export const getPublic = () => {
    let data = axios.get('/auth/getPublic')
                    .then(res => res.data)
                    console.log(data)
    return {
        type: GET_PUBLIC,
        payload: data
    }
}

export const getPublicById = (id) => {
    let data = axios.get(`/auth/getPublicById/${id}`)
    .then(res => res.data)
    return {
        type: GET_IDD,
        payload: data
        }
}

export const addPublic = (title, content, Image, genre, username, description, user_id)=> {
    let data = axios.post('/auth/addPublic', {title, content, Image, genre, username, description, user_id})
    .then(res => res.data)
    return{
        type: SAVE_PUBLIC,
        payload: data
    }
}

export const deletePublic = (id)=> {
    let data = axios.delete(`/auth/deletePublic/${id}`)
    .then(res => res.data)
    return{
        type: DELETE_PUBLIC,
        payload: data
    }
}

export const editPublic = (id,title, content) => {
    let data = axios.put(`/auth/editPublic/${id}`, {title,content})
    .then(res => res.data)
    return{
        type: EDIT_PUB,
        payload: data
    }
}

export default function reducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case GET_PUBLIC + "_FULFILLED":
            return{text:payload}
        case SAVE_PUBLIC:
            return {text:payload}
        case GET_IDD + "_FULFILLED":
            return {text:payload}
        case EDIT_PUB + "FULFILLED":
            return{text:payload}
        case DELETE_PUBLIC + "FULFILLED":
            return{text:payload}
            default:
                return state;
    }
}