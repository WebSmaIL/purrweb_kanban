import React, { useContext, useState } from "react";
import AddCardForm from "./AddCardForm/AddCardForm";
import { StateContext } from "../../../../api/ContextAPI";
import { ICard, IColumn } from "../../../../interfaces/baseInterfaces";
import { AddCardButton } from "./style";
import { plus } from "../../../../assets";
import { replaceColumn } from "../../../../helpers/helpers";

const AddCard = ({ id, name, cards }: IColumn) => {
    const context = useContext(StateContext);
    const [isEdit, setIsEdit] = useState(false);

    const addCard = (cardTitle: string) => {
        const card: ICard = {
            id: Number(Date.now()),
            author: context.userName,
            name: cardTitle,
            description: "",
            comments: [],
        };
        const column = { id, name, cards: [...cards, card] };
        const updatedColumns = replaceColumn(context.columns, id, column);
        context.setColumns(updatedColumns);
        setIsEdit(!isEdit);
    };

    return isEdit ? (
        <AddCardForm isVisible={isEdit} onAddCard={addCard} />
    ) : (
        <AddCardButton onClick={() => setIsEdit(!isEdit)} isVisible={isEdit}>
            <img src={plus} alt="" />
            <span>Add Card</span>
        </AddCardButton>
    );
};

export default AddCard;
