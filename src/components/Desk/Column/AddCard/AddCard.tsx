import React, { useState } from "react";
import AddCardForm from "./AddCardForm/AddCardForm";
import { ICard, IColumn } from "../../../../interfaces/baseInterfaces";
import { AddCardButton } from "./style";
import { plus } from "../../../../assets";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { updateColumns } from "../../../../redux/ducks/columns/reducers";  

const AddCard = ({ id, name, cards }: IColumn) => {
    const dispatch = useAppDispatch();
    const userName = useAppSelector(state => state.userInfo.name);
    const [isEdit, setIsEdit] = useState(false);

    const addCard = (cardTitle: string) => {
        const card: ICard = {
            id: Number(Date.now()),
            author: userName,
            name: cardTitle,
            description: "",
            comments: [],
        };
        dispatch(updateColumns({ id, name, cards: [...cards, card] }));
        setIsEdit(!isEdit);
    };

    return isEdit ? (
        <AddCardForm onAddCard={addCard} />
    ) : (
        <AddCardButton onClick={() => setIsEdit(!isEdit)}>
            <img src={plus} alt="" />
            <span>Add Card</span>
        </AddCardButton>
    );
};

export default AddCard;
