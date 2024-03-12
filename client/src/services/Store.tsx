import { configureStore } from "@reduxjs/toolkit";
import { Slice } from './Slice';
import { SummarizeApi } from "../api/SummarizeApi";

export const Store = configureStore({
    reducer : {
        ai : Slice.reducer,
        [SummarizeApi.reducerPath] : SummarizeApi.reducer
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(SummarizeApi.middleware)
})