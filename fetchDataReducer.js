import { GET_API_DATA } from "../Store/Type"

const initialState = {
    apiData: []
}

const fetchDataReducer = (state = initialState, actions) => {
    const { type, payload } = actions
    switch (type) {
        case GET_API_DATA: {
            return {
                ...state,
                apiData: payload
            }
        }
        default: {
            return state
        }
    }
}

export default fetchDataReducer