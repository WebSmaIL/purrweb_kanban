import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ICommentNew } from "../../../interfaces/baseInterfaces";

const initialState: ICommentNew[] = [];

const cardsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        addComment: (state, action: PayloadAction<ICommentNew>) => {
            state.push({
                id: action.payload.id,
                cardId: action.payload.cardId,
                author: action.payload.author,
                content: action.payload.content,
            });
        },

        updateComments: (state, action: PayloadAction<ICommentNew>) => {
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

export const { addComment, deleteComment, updateComments } = cardsSlice.actions;

export default cardsSlice.reducer;
