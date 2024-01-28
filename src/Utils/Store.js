import {configureStore} from "@reduxjs/toolkit";
import appSlice from "./appSlice";


const store=configureStore({
    reducer:{
        app: appSlice,  // added appslice into store 
    },

});

export default store;