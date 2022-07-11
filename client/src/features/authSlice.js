import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    status: '',
    isAuthenticated: false,
    user:[]
}

export const fetch = createAsyncThunk('localstorage',async () => {
    const admin = JSON.parse(localStorage.getItem('admin')) || []
      return admin
})
const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        adminLoggedIn(state,action){
            const user = action.payload
            console.log(user)
            state.user = user
        },
        adminLoggedOut(state,action){
            state.user = {};
            state.isAuthenticated = false;
            localStorage.removeItem('admin');
        }
    },
    extraReducers: {
        [fetch.pending]: (state, action) => {
            state.status = 'loading'
          },
          [fetch.fulfilled]: (state, action) => {
              console.log(action.payload)
            state.status = 'succeeded'
            if(action.payload.length === 0){
                state.isAuthenticated = false
            }
            state.isAuthenticated = true
            state.user = state.user.concat(action.payload)
            
          },
          [fetch.rejected]: (state, action) => {
            state.status = 'failed'
          },
    }
})

export const { adminLoggedIn, adminLoggedOut } = adminSlice.actions
export default adminSlice.reducer;