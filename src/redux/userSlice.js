import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import  Axios from "axios"

export const getUsers = createAsyncThunk('gets/getUsers',async () => {
    return Axios.get('https://api.punkapi.com/v2/beers?page=1&per_page=10').then(res => {
        return res.data
    })
})

const userSlice = createSlice({
    name : "users",
    initialState : {
        users : [],
        
    },
    extraReducers : {
        [getUsers.pending] : (state,action) => {
            
        },
        [getUsers.fulfilled] : (state,action) => {
           
            state.users = action.payload;
        },
        [getUsers.rejected] : (state,action) => {
                   
        },
    }
})

export default userSlice.reducer;