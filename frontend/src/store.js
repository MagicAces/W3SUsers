import { configureStore } from '@reduxjs/toolkit';
import contentReducer from './slices/contentSlice';
import { apiSlice } from './slices/apiSlice';

const store = configureStore({
    reducer: {
        content: contentReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
});

export default store;