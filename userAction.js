import {GET_USERS, USERS_ERROR} from '../Store/Type'
import axios from 'axios'
import api from '../../api'

export const getUsers = () => async dispatch => {
    
    try{
        const res = await api.get(`/`)
        dispatch( {
            type: GET_USERS,
            payload: res.data
           
        })
    }
    catch(e){
        dispatch( {
            type: USERS_ERROR,
            payload: console.log(e),
        })
    }

}