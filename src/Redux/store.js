import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { DestinationApi } from "../api/DestinationApi";

export const store = configureStore({
    reducer: {
        [DestinationApi.reducerPath]: DestinationApi.reducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(DestinationApi.middleware)
})