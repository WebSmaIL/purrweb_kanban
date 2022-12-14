import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export const getAllColumns = (state: RootState) => state.columns.columns;

export const getColumnByIdSelector = (columnId: number) => createSelector(
    [getAllColumns],
    (columns) => columns.find(
        (column: { id: number }) => column.id === columnId
    )
);
