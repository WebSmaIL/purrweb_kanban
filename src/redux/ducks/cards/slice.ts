import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ICardNew } from "../../../interfaces/baseInterfaces";

const initialState: ICardNew[] = [];

const cardsSlice = createSlice({
    name: "cards",
    initialState,
    reducers: {
        addCard: (state, action: PayloadAction<ICardNew>) => {
            state.push({
                author: action.payload.author,
                columnId: action.payload.columnId,
                description: action.payload.description,
                id: action.payload.id,
                name: action.payload.name,
            });
        },

        updateCards: (state, action: PayloadAction<ICardNew>) => {
            const index = state.findIndex(
                (card: { id: number }) => card.id === action.payload.id
            );
            state[index] = {
                author: action.payload.author,
                columnId: action.payload.columnId,
                description: action.payload.description,
                id: action.payload.id,
                name: action.payload.name,
            };
        },

        deleteCard: (state, action: PayloadAction<number>) => {
            const index = state.findIndex(
                (card: { id: number }) => card.id === action.payload
            );
            state.splice(index, 1);
        },
    },
});

export const { addCard, deleteCard, updateCards } = cardsSlice.actions;

export default cardsSlice.reducer;
