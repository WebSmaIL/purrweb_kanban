export interface card {
    id: number
    name: string
    description: string
    comments: number[]
}

export interface column {
    id: number
    name: string
    cards: card[]
}
