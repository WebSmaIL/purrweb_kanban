import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const selectSelf = (state: RootState) => state;

export const getAllColumns = createSelector(
    selectSelf,
    (state) => state.columns.columns
);


export const getColumnByIdSelector = (columnId: number) => createSelector(
    [getAllColumns],
    (columns) => columns.find(
        (column: { id: number }) => column.id === columnId
    )
);
