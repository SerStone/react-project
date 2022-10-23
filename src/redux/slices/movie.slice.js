
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";


const initialState = {
    moviesUpcoming: [],
    isLoading: false
};


const getAllUpcoming = createAsyncThunk(
    'movieSlice/getAllUpcoming',
    async ({type}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(type);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllUpcoming.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllUpcoming.fulfilled, (state, action) => {
                state.moviesUpcoming = action.payload;
                state.isLoading = false;
            })
            .addCase(getAllUpcoming.rejected, (state) => {
                state.isLoading = false;
            })
    }
});


const {reducer: movieReducer} = movieSlice;

const movieActions = {
    getAllUpcoming
};

export {movieReducer, movieActions};












