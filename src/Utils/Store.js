import {configureStore} from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import chatSlice from "./chatSlice";


const store=configureStore({
    reducer:{
        app: appSlice,  // added appslice into store 
        chat: chatSlice,
    },

});

export default store;