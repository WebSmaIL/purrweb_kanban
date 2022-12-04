import React, { useContext, useState } from "react";
import { ColumnsContext } from "../../../api/ContextAPI";
import { ICard, ICardInfo, IColumn } from "../../../interfaces/baseInterfaces";
import { InputTitle, CardTitle } from "./style";

interface IProps {
    cardInfo: ICardInfo;
    findCard: (
        columns: IColumn[],
        columnId: number,
        cardId: number
    ) => ICard | undefined;
}

const Title = ({ cardInfo, findCard }: IProps) => {
    const context = useContext(ColumnsContext);

    const [isEditTitle, setIsEditTitle] = useState(false);
    const [newTitle, setNewTitle] = useState(cardInfo?.name);

    const updateTitle = () => {
        const columns = [...context.columns];
        if (cardInfo) {
            const targetCard = findCard(
                columns,
                cardInfo.columnId,
                cardInfo.cardId
            );
            if (targetCard) {
                targetCard.name = newTitle;
                context.setViewedCard({
                    ...cardInfo,
                    name: targetCard.name,
                });
                context.setColumns(columns);
                setIsEditTitle(false);
            }
        }
    };

    return (
        <>
            {isEditTitle ? (
                <InputTitle
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    onBlur={() => updateTitle()}
                />
            ) : (
                <CardTitle onClick={() => setIsEditTitle(true)}>
                    Current card - <i>{cardInfo.name}</i>
                </CardTitle>
            )}
        </>
    );
};

export default Title;
