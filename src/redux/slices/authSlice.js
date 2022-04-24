import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoggedIn: false,
    email: null,
    userName: null
}

const authSlice = createSlice({
    name: 'userAuth',
    initialState,
    reducers: {
        setSignIn: (state, action) => {
            state.isLoggedIn = action.payload.isLoggedIn;
        },
        setSignOut: (state) => {
            state.isLoggedIn = false;
        }
    }
});

export const { setSignIn, setSignOut } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.userAuth.isLoggedIn;
export const selectEmail = (state) => state.userAuth.email;
export const selectUserName = (state) => state.userAuth.userName;

export default authSlice.reducer;