import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export const selectSelf = (state: RootState) => state.commentsReducer;

export const getAllComments = createSelector([selectSelf], (state) => state);

export const getCommentsByCardId = (cardId: number) =>
    createSelector([getAllComments], (comments) =>
        comments.filter((comment) => comment.cardId === cardId)
    );
