import React, { useContext, useState } from "react";
import AddCardForm from "./AddCardForm/AddCardForm";
import { ColumnsContext } from "../../../../api/ContextAPI";
import { ICard, IColumn } from "../../../../interfaces/baseInterfaces";
import { AddCardButton } from "./style";
import assets from "../../../../assets";

const { plus } = assets;
interface IProps {
    findColumn: (columns: IColumn[], id: number) => IColumn | undefined;
    columnID: number;
}

const AddCard = ({ findColumn, columnID }: IProps) => {
    const context = useContext(ColumnsContext);

    const [isVisibleAddCard, setIsVisibleAddCard] = useState(false);
    const [newCardName, setNewCardName] = useState("");

    const addCard = () => {
        if (newCardName !== "") {
            const card: ICard = {
                id: Number(Date.now()),
                author: context.userName,
                name: newCardName,
                description: "",
                comments: [],
            };
            const columns = [...context.columns];
            const targetColumn = findColumn(columns, columnID);
            if (targetColumn) {
                targetColumn.cards.push(card);
            }
            context.setColumns(columns);
            setNewCardName("");
        }

        setIsVisibleAddCard(!isVisibleAddCard);
    };

    return (
        <>
            {isVisibleAddCard ? (
                <AddCardForm
                    value={newCardName}
                    isVisible={isVisibleAddCard}
                    setNewCardName={setNewCardName}
                    onAddCard={addCard}
                />
            ) : (
                <AddCardButton
                    onClick={() => setIsVisibleAddCard(!isVisibleAddCard)}
                    addCardMode={isVisibleAddCard}
                >
                    <img src={plus} alt="" />
                    <span>Add Card</span>
                </AddCardButton>
            )}
        </>
    );
};

export default AddCard;
