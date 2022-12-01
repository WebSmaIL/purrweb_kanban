export interface ICard {
    id: number
    name: string
    description: string
    comments: []
}

export interface IColumn {
    id: number
    name: string
    cards: ICard[]
}
