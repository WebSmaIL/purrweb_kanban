import { column } from './interfaces/baseInterfaces'

export const columns: column[] = [
    {
        id: 1,
        name: 'TODO',
        cards: [
            {
                id: 1,
                name: 'Закончить работу с колонками',
                description: '',
                comments: [1, 2, 3]
            }
        ]
    },
    {
        id: 2,
        name: 'In Progress',
        cards: []
    },
    {
        id: 3,
        name: 'Testing',
        cards: []
    },
    {
        id: 4,
        name: 'Done',
        cards: []
    }
]