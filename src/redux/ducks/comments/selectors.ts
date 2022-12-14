import { createSelector } from "@reduxjs/toolkit";
import { ICardInfo } from "../../../interfaces/baseInterfaces";
import { RootState } from "../../store";

export const selectSelf = (state: RootState) => state.commentsReducer;

export const getAllComments = createSelector([selectSelf], (state) => state);

const getCommentsByCardId = (state: RootState, props: ICardInfo) =>
    state.commentsReducer.filter((comment) => comment.cardId === props.cardId);

export const makeGetCommentsByCardId = () => {
    return createSelector(
        [getCommentsByCardId],
        (filtredComments) => filtredComments
    );
};

