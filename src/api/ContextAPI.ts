import React, { createContext } from "react";
import { LocalStorageAPI } from "./LocalStorageAPI";
import { IColumn } from "../interfaces/baseInterfaces";

const columnsFromStorage = LocalStorageAPI.getColumns();
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

export const ContextState = columnsFromStorage || defaultColumns;

type ContextType = {
    columns: IColumn[];
    userName: string;
    setColumns: React.Dispatch<any>;
    setViewedCard: React.Dispatch<any>;
};

export const ColumnsContext = createContext<ContextType>({
    columns: [...ContextState],
    userName: "",
    setColumns: () => {},
    setViewedCard: () => {},
});
