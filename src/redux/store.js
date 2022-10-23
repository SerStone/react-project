import {combineReducers,configureStore} from "@reduxjs/toolkit";

import {filterReducer,
    genreReducer,
    movieReducer} from "./slices";

const rootReducer = combineReducers({
    filter:filterReducer,
    movie:movieReducer,
    genre:genreReducer
})

const setupStore = () => configureStore({
    reducer:rootReducer
})

export {setupStore}