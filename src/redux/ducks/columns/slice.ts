import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IColumn } from "../../../interfaces/baseInterfaces";
import { replaceColumn } from "../../../helpers/helpers";

interface IColumnsState {
    columns: IColumn[];
}

const defaultColumns: IColumn[] = [
    {
        id: 1,
        name: "TODO",
    },
    {
        id: 2,
        name: "In Progress",
    },
    {
        id: 3,
        name: "Testing",
    },
    {
        id: 4,
        name: "Done",
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
