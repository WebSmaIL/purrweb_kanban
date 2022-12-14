import { createSelector } from "@reduxjs/toolkit";
import { ICardInfo } from "../../../interfaces/baseInterfaces";
import { RootState } from "../../store";

export const selectSelf = (state: RootState) => state.cardsReducer;

export const getAllCards = createSelector([selectSelf], (state) => state);

const getCardById = (state: RootState, props: ICardInfo) =>
    state.cardsReducer.find((card: { id: number }) => card.id === props.cardId);

const getCardsByColumnId = (state: RootState, props: { columnId: number }) =>
    state.cardsReducer.filter(
        (card: { columnId: number }) => card.columnId === props.columnId
    );

export const makeGetCardsByColumnId = () => {
    return createSelector(getCardsByColumnId, (cards) => cards);
};

export const makeGetCardById = () => {
    return createSelector([getCardById], (card) => card);
};
