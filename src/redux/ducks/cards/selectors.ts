import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export const getAllCards = (state: RootState) => state.cardsReducer;
const getState = (state: RootState) => state;

export const getCardsByColumnId = (columnId: number) =>
    createSelector(getAllCards, (cards) =>
        cards.filter((card: { columnId: number }) => card.columnId === columnId)
    );

export const getCardById = (cardId: number) =>
    createSelector([getAllCards, getState], (cards, state) => {
        const cardTarget = cards.find(
            (card: { id: number }) => card.id === cardId
        );
        if (cardTarget) {
            const columnName = state.columns.columns.find(
                (column: { id: number }) => column.id === cardTarget.columnId
            )?.name;
            const currentCardInfo = {
                author: cardTarget.author,
                columnId: cardTarget.columnId,
                description: cardTarget.description,
                name: cardTarget.name,
                columnName
            };
            return currentCardInfo;
        }
        return;
    });
