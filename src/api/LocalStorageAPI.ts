import { IColumn } from "../interfaces/baseInterfaces"

export const LocalStorageAPI = {
    getColumns () {
        return JSON.parse(String(localStorage.getItem("columns")))
    },

    setColumns (columns: IColumn) {
        localStorage.setItem("columns", JSON.stringify(columns))
    }
}