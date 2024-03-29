import React, { useState } from "react";
import AddCardForm from "./AddCardForm/AddCardForm";
import { ICard, IColumn } from "../../../../interfaces/baseInterfaces";
import { AddCardButton } from "./style";
import { plus } from "../../../../assets";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { cardsActions } from "../../../../redux/ducks/cards";
import { userSelectors } from "../../../../redux/ducks/user";

const AddCard = ({ id }: IColumn) => {
    const dispatch = useAppDispatch();
    const userName = useAppSelector(userSelectors.getName);
    const [isEdit, setIsEdit] = useState(false);

    const onAddCard = (cardTitle: string) => {
        const card: ICard = {
            id: Number(Date.now()),
            author: userName,
            name: cardTitle,
            description: "",
            columnId: id,
        };
        dispatch(cardsActions.addCard(card));
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
