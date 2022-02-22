import { createSlice } from "@reduxjs/toolkit";
const photo=createSlice({
    name:'Photos',
    initialState:[],
    reducers:{
        addPhoto:(state,action)=>{
            state.push(action.payload)
        }
        
    }
});

const {reducer, actions}=photo;
export const{addPhoto}=actions;
export default reducer;
