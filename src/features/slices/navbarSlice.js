import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isMenuOpened: false,
    itemClickedId: "n-1-1"
}

const navbarSlice = createSlice({
    name:'navbar',
    initialState,
    reducers:{
        openMenu:(state )=>{
               state.isMenuOpened = true;
        },
        closeMenu:(state) =>{
            state.isMenuOpened =false;
        },
        setIdClicked :(state, action )=>{
            state.itemClickedId = action.payload
        }
    }
})


export const selectNavbar = (state) => state.navbar;
    //匯出 actions.creeaters
export const {openMenu , closeMenu, setIdClicked} = navbarSlice.actions;
    //將整個 coffeeBeanSlice 匯出, 預設匯出（檔案內最終目的）
export default  navbarSlice.reducer; 