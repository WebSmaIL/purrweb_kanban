export interface card {
    id: number
    name: string
    description: string
    comments: []
}

export interface column {
    id: number
    name: string
    cards: card[]
}
