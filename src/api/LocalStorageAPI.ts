import { IColumn } from './../interfaces/baseInterfaces';

export const LocalStorageAPI = {
    updateColumns (columns: IColumn[]) {
        localStorage.setItem("columns", JSON.stringify(columns));
    },

    getColumns () {
        return JSON.parse(String(localStorage.getItem("columns")))
    }
}