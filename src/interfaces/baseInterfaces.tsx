export interface ICard {
    id: number;
    name: string;
    author: string;
    description: string;
    comments: IComment[];
}

export interface IColumn {
    id: number;
    name: string;
    cards: ICard[];
}

export interface IComment {
    id: number;
    author: string;
    content: string;
}

export interface ICardInfo {
    columnId: number;
    cardId: number;
}