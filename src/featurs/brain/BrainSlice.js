import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import BrainService from "./BrainService";

const BrainSlice = createSlice({
    name : "stories",
    initialState : {
        scienceStories : [],
        storie : {},
        isLoading : false,
        isSuccess : false,
        isError : false,
        isMessage : ""
    },

    reducers : {},
    extraReducers : (builder) => {
        builder.addCase(getStories.pending, (state, action) => {
            state.isLoading = true;
            state.isSuccess= false;
            state.isError = false;
        }).addCase(getStories.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess= true;
            state.isError = false;
            state.scienceStories = action.payload;
        }).addCase(getStories.rejected, (state, action) => {
            state.isLoading = false;
            state.isSuccess= false;
            state.isError = true;
            state.isMessage = action.payload;
        })
        .addCase(getStoriesData.pending, (state, action) => {
            state.isLoading = true;
            state.isSuccess= false;
            state.isError = false;
        }).addCase(getStoriesData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess= true;
            state.isError = false;
            state.storie = action.payload;
        }).addCase(getStoriesData.rejected, (state, action) => {
            state.isLoading = false;
            state.isSuccess= false;
            state.isError = true;
            state.isMessage = action.payload;
        })

    }
})

export default BrainSlice.reducer;

export const getStories = createAsyncThunk("FETCH/STORIES", async() => {
    try {
        return await BrainService.fetchStories();
    } catch (error) {
        console.log(error)
    }
})


export const getStoriesData = createAsyncThunk("FETCH/STORIESDATA", async(id) => {
    try {
        return await BrainService.storieData(id);
    } catch (error) {
        console.log(error)
    }
})
