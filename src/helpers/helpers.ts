import { ICard, ICardInfo, IColumn } from "../interfaces/baseInterfaces";

export const replaceCard = (
    columns: IColumn[],
    cardInfo: ICardInfo,
    newCard: ICard
) => {
    return columns.map((column) => {
        if (column.id === cardInfo.columnId) {
            const updatedCards = column.cards.map((card) =>
                card.id === cardInfo.cardId ? newCard : card
            );
            column.cards = updatedCards;
        }
        return column;
    });
};

export const replaceColumn = (
    columns: IColumn[],
    id: number,
    newColumn: IColumn
) => {
    return columns.map((column) => column.id === id ? newColumn : column);
};

