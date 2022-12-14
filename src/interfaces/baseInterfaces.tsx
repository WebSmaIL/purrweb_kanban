export interface ICardInfo {
    columnId: number;
    cardId: number;
}



export interface IColumnNew {
    id: number;
    name: string;
}

export interface ICardNew {
    id: number;
    columnId: number;
    name: string;
    author: string;
    description: string;
}

export interface ICommentNew {
    id: number;
    cardId: number;
    author: string;
    content: string;
}