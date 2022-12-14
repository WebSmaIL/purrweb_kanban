import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IComment } from "../../../interfaces/baseInterfaces";

const initialState: IComment[] = [];

const cardsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        addComment: (state, action: PayloadAction<IComment>) => {
            state.push({
                id: action.payload.id,
                cardId: action.payload.cardId,
                author: action.payload.author,
                content: action.payload.content,
            });
        },

        updateComments: (state, action: PayloadAction<IComment>) => {
            const index = state.findIndex(
                (card: { id: number }) => card.id === action.payload.id
            );
            state[index] = {
                id: action.payload.id,
                cardId: action.payload.cardId,
                author: action.payload.author,
                content: action.payload.content,
            };
        },

        deleteComment: (state, action: PayloadAction<number>) => {
            const index = state.findIndex(
                (card: { id: number }) => card.id === action.payload
            );
            state.splice(index, 1);
        },
    },
});

export const commentsActions = cardsSlice.actions;

export default cardsSlice.reducer;
