import { ICardInfo } from "./../../../interfaces/baseInterfaces";
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const selectSelf = (state: RootState) => state;

export const getAllColumns = createSelector(
    selectSelf,
    (state) => state.columns.columns
);

const getColumnById = (state: RootState, props: ICardInfo) =>
    state.columns.columns.find(
        (column: { id: number }) => column.id === props.columnId
    );

export const getColumnByIdSelector = createSelector(
    [getColumnById],
    (column) => column
);
