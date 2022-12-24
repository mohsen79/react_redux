import {createSlice} from "@reduxjs/toolkit";

const initialStateValue = "";
export const ColorSlice = createSlice({
    name: "color",
    initialState: {value: initialStateValue},
    reducers: {
        changeColor: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const {changeColor} = ColorSlice.actions;
export default ColorSlice.reducer;