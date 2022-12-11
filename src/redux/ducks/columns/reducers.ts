import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
    ICard,
    ICardInfo,
    IColumn,
} from "../../../interfaces/baseInterfaces";
import { replaceCard, replaceColumn } from "../../../helpers/helpers";
import { cloneDeep } from "lodash";

interface IUpdateCard {
    currentCard: ICard;
    cardInfo: ICardInfo;
}

interface IUpdateComment extends IUpdateCard {
    commentId: number;
    commentText: string;
}

interface IDeleteComment extends IUpdateCard {
    commentId: number;
}

interface IColumnsState {
    columns: IColumn[];
}

const defaultColumns = [
    {
        id: 1,
        name: "TODO",
        cards: [],
    },
    {
        id: 2,
        name: "In Progress",
        cards: [],
    },
    {
        id: 3,
        name: "Testing",
        cards: [],
    },
    {
        id: 4,
        name: "Done",
        cards: [],
    },
];

const initialState: IColumnsState = {
    columns: defaultColumns,
};

const columnsSlice = createSlice({
    name: "columns",
    initialState,
    reducers: {
        updateColumns: (state, action: PayloadAction<IColumn>) => {
            const column = {
                id: action.payload.id,
                name: action.payload.name,
                cards: action.payload.cards,
            };

            state.columns = replaceColumn(
                state.columns,
                action.payload.id,
                column
            );
        },

        updateCards: (state, action: PayloadAction<IUpdateCard>) => {
            const { cardInfo, currentCard } = action.payload;

            const card: ICard = {
                author: currentCard.author,
                comments: currentCard.comments,
                description: currentCard.description,
                name: currentCard.name,
                id: currentCard.id,
            };

            state.columns = replaceCard(state.columns, cardInfo, card);
        },
        
        deleteCard: (state, action: PayloadAction<ICardInfo>) => {
            const columnCopy = cloneDeep(
                state.columns.find(
                    (column: { id: number }) =>
                        column.id === action.payload.columnId
                )
            );

            if (columnCopy) {
                columnCopy.cards = columnCopy.cards.filter(
                    (card) => card.id !== action.payload.cardId
                );
                state.columns = replaceColumn(
                    state.columns,
                    action.payload.columnId,
                    columnCopy
                );
            }
        },

        updateComment: (state, action: PayloadAction<IUpdateComment>) => {
            const { cardInfo, commentText, commentId, currentCard } =
                action.payload;

            const cardCopy = cloneDeep(currentCard);
            cardCopy.comments = cardCopy.comments.map((comment) =>
                comment.id === commentId
                    ? {
                          id: commentId,
                          author: comment.author,
                          content: commentText,
                      }
                    : comment
            );
            state.columns = replaceCard(state.columns, cardInfo, cardCopy);
        },

        deleteComment: (state, action: PayloadAction<IDeleteComment>) => {
            const { cardInfo, commentId, currentCard } = action.payload;

            const cardCopy = cloneDeep(currentCard);
            cardCopy.comments = cardCopy.comments.filter(
                (comment) => comment.id !== commentId
            );

            state.columns = replaceCard(state.columns, cardInfo, cardCopy);
        },
    },
});

export const {
    updateColumns,
    deleteCard,
    updateComment,
    deleteComment,
    updateCards,
} = columnsSlice.actions;

export default columnsSlice.reducer;
