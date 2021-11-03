import React, { useReducer } from 'react'
import { ADD_CAT, ADD_CITY, ADD_TYPE } from './types'
import SearchContext from './SearchContext'
import SearchReducer from './SearchReducer'


const SearchState = (props) => {

    const initialState = {
        city : null,
        type: null,
        category: null
    }

    const [state, dispatch] = useReducer(SearchReducer, initialState)


    const addType = (type) => {
        dispatch({
            payload: type,
            type: ADD_TYPE
        })
    }

    const addCity = (city) => {
        dispatch({
            payload: city,
            type: ADD_CITY
        })
    }

    const addCat = (cat) => {
        dispatch({
            payload: cat,
            type: ADD_CAT
        })
    }

 

    return (
        <SearchContext.Provider value={{
            addType,
            addCity,
            addCat,
            city: state.city,
            type:state.type,
            category: state.category
        }}>
            {props.children}
        </SearchContext.Provider>
    )
}

export default SearchState