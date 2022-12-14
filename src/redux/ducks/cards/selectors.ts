import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const selectSelf = (state: RootState) => state.cardsReducer;

export const getAllCards = createSelector([selectSelf], (state) => state);

export const getCardsByColumnId = (columnId: number) =>
    createSelector(getAllCards, (cards) =>
        cards.filter((card: { columnId: number }) => card.columnId === columnId)
    );

export const getCardById = (cardId: number) =>
    createSelector([getAllCards], (cards) =>
        cards.find((card: { id: number }) => card.id === cardId)
    );
