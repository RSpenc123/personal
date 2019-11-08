import axios from 'axios'

const initialState = {
    Text: {}
}

const UPDATE_PUBLIC = 'UPDATE_PUBLIC'
const GET_PUBLIC = 'GET_PUBLIC'
const SAVE_PUBLIC = 'SAVE_PUBLIC'

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

export const addPublic = (title, content)=> {
    let data = axios.post('/auth/addPublic', {title, content})
    .then(res => res.data)
    return{
        type: SAVE_PUBLIC,
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
            default:
                return state;
    }
}