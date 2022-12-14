import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IColumnNew } from "../../../interfaces/baseInterfaces";
import { replaceColumn } from "../../../helpers/helpers";

interface IColumnsState {
    columns: IColumnNew[];
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
        updateColumns: (state, action: PayloadAction<IColumnNew>) => {
            const column = {
                id: action.payload.id,
                name: action.payload.name
            };

            state.columns = replaceColumn(
                state.columns,
                action.payload.id,
                column
            );
        },
    },
});

export const {
    updateColumns,
} = columnsSlice.actions;

export default columnsSlice.reducer;
