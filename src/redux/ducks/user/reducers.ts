import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IUserInfo {
    name: string;
}

const initialState: IUserInfo = {
    name: ""
};

const userInfoSlice = createSlice({
    name: "userInfo",
    initialState,
    reducers: {
        setUserName: (state: IUserInfo, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
    },
});

export const { setUserName } = userInfoSlice.actions;

export default userInfoSlice.reducer;
