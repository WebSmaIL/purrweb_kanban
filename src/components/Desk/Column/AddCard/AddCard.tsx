import React, { useState } from "react";
import AddCardForm from "./AddCardForm/AddCardForm";
import { ICardNew, IColumnNew } from "../../../../interfaces/baseInterfaces";
import { AddCardButton } from "./style";
import { plus } from "../../../../assets";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { addCard } from "../../../../redux/ducks/cards";
import { getName } from "../../../../redux/ducks/user";

const AddCard = ({ id }: IColumnNew) => {
    const dispatch = useAppDispatch();
    const userName = useAppSelector(getName);
    const [isEdit, setIsEdit] = useState(false);

    const onAddCard = (cardTitle: string) => {
        const card: ICardNew = {
            id: Number(Date.now()),
            author: userName,
            name: cardTitle,
            description: "",
            columnId: id,
        };
        dispatch(addCard(card));
        setIsEdit(!isEdit);
    };

    return isEdit ? (
        <AddCardForm onAddCard={onAddCard} />
    ) : (
        <AddCardButton onClick={() => setIsEdit(!isEdit)}>
            <img src={plus} alt="" />
            <span>Add Card</span>
        </AddCardButton>
    );
};

export default AddCard;
