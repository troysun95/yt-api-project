import { createSlice } from '@reduxjs/toolkit';

const initialState ={
    accessTokenString : ""
}

const accessTokenSlice = createSlice({
    name:'accessToken',
    initialState,
    reducers:{
        accessTokenGet:(state, action )=>{
           return {
            ...state,
            accessTokenString: state.accessTokenString + action.payload
           }
        },
        accessTokenRemove:() =>{
            return {
                //...state,
                accessTokenString: ""
            }
        }
    },
}) 



export const selectAccessToken = (state) => state.accessToken;
    //匯出 actions.creeaters
export const {accessTokenGet, accessTokenRemove} = accessTokenSlice.actions;
    //將整個 coffeeBeanSlice 匯出, 預設匯出（檔案內最終目的）
export default  accessTokenSlice.reducer;