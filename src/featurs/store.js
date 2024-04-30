import { configureStore } from "@reduxjs/toolkit";
import BrainReducer from "./brain/BrainSlice"

const store = configureStore({
    reducer : {
        stories : BrainReducer 
    },
})


export default store;