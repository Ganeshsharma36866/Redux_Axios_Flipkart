import api from "../../Api"
import { GET_API_DATA } from "../Store/Type"

export const getData = () => dispatch => {
    api.get("products")
        .then(res => {
            dispatch({
                type: GET_API_DATA,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_API_DATA,
                payload: {
                    data: null,
                    err
                }
            })
        })
}