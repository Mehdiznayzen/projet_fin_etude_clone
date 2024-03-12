import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    darkMode : false,
    colorDarkMode : "#EEEEEE",
    colorScrollProgress : "#030637"
}

export const Slice = createSlice({
    name : 'ai',
    initialState ,
    reducers : {
        handleDarkModel(state){
            state.darkMode = !state.darkMode
            if(state.colorDarkMode === "#EEEEEE"){
                state.colorDarkMode = "#030637"
                state.colorScrollProgress = "#EEEEEE"
            }else if(state.colorDarkMode === "#030637"){
                state.colorDarkMode = "#EEEEEE"
                state.colorScrollProgress = "#030637"
            }
        }
    }
})

export const actions = Slice.actions