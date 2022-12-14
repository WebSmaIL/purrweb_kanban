import { IColumn } from "../interfaces/baseInterfaces";

export const replaceColumn = (
    columns: IColumn[],
    id: number,
    newColumn: IColumn
) => {
    return columns.map((column) => (column.id === id ? newColumn : column));
};
