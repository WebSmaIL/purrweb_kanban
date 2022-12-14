import { IColumnNew } from "../interfaces/baseInterfaces";



export const replaceColumn = (
    columns: IColumnNew[],
    id: number,
    newColumn: IColumnNew
) => {
    return columns.map((column) => column.id === id ? newColumn : column);
};

