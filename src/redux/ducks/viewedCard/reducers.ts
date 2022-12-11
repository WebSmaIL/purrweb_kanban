import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IViewedCardState {
    columnId: number | undefined
    cardId: number | undefined
}

const initialState: IViewedCardState = {
    columnId: undefined,
    cardId: undefined
};

const viewedCardSlice = createSlice({
    name: "viewedCard",
    initialState,
    reducers: {
        setViewedCard: (state: IViewedCardState, action: PayloadAction<IViewedCardState>) => {
            state.cardId = action.payload.cardId;
            state.columnId = action.payload.columnId;
        },
    },
});

export const { setViewedCard } = viewedCardSlice.actions;

export default viewedCardSlice.reducer;
