import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        countValue: 0
    },
    reducers: {
        action1: (state) => {
            state.countValue += 1;
        },
        action2: (state, action) => {
            state.countValue -= 1;
        },
    }
})


export default counterSlice.reducer;
export const { action1, action2 } = counterSlice.actions