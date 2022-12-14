export interface ICardInfo {
    columnId: number;
    cardId: number;
}

export interface IColumn {
    id: number;
    name: string;
}

export interface ICard {
    id: number;
    columnId: number;
    name: string;
    author: string;
    description: string;
}

export interface IComment {
    id: number;
    cardId: number;
    author: string;
    content: string;
}
