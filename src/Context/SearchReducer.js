/* eslint-disable import/no-anonymous-default-export */
import { ADD_CAT, ADD_CITY, ADD_TYPE } from "./types";

export default (state, action) => {

    const { payload, type } = action
    switch (type) {

        case ADD_CAT:
            return {
                ...state,
                category: payload
            }
            case ADD_CITY:
            return {
                ...state,
                city: payload
            }
            case ADD_TYPE:
            return {
                ...state,
                type: payload
            }
       

        default:
            return state
    }

}