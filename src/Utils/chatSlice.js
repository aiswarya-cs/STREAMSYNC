import {createSlice} from "@reduxjs/toolkit"
import { LIVE_CHAT_COUNT } from "./Constants";

const chatSlice =createSlice({
    name:'chat',
    initialState:{
        messages:[]
    },
    reducers:{
        addMessage:(state, action)=>{
            state.messages.slice(LIVE_CHAT_COUNT,1);
            state.messages.push(action.payload);
        },
    },
});

export const {addMessage} = chatSlice.actions;
export default chatSlice.reducer;