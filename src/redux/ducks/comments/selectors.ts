import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export const getAllComments = (state: RootState) => state.commentsReducer;

export const getCommentsByCardId = (cardId: number) =>
    createSelector([getAllComments], (comments) =>
        comments.filter((comment) => comment.cardId === cardId)
    );
