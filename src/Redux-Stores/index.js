import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../Redux-Reducers'

const store = configureStore({
    reducer:todoReducer
})

export default store;