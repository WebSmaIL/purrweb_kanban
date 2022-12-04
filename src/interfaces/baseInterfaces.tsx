export interface ICard {
    id: number;
    name: string;
    author: string;
    description: string;
    comments: {
        id: number;
        author: string;
        content: string;
    }[];
}

export interface IColumn {
    id: number;
    name: string;
    cards: ICard[];
}

export interface ICardInfo {
    columnId: number;
    columnName: string;
    cardId: number;
    name: string;
    author: string;
    description: string;
    comments:
        | {
              id: number;
              author: string;
              content: string;
          }[]
        | [];
}

export interface IViewedCard {
    cardInfo?: ICardInfo;
}
