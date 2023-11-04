import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: []
}

const contentSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload;
        }
    }
})

export const { setUsers } = contentSlice.actions;

export default contentSlice.reducer;