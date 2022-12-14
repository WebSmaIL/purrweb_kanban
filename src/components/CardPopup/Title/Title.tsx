import React, { useState } from "react";
import { ICard } from "../../../interfaces/baseInterfaces";
import { InputTitle, CardTitle, UpdateTitleForm, SubmitButton } from "./style";
import { accept } from "../../../assets";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "../../../hooks";
import { updateCards } from "../../../redux/ducks/cards";

interface IProps {
    currentCard: ICard;
}

interface IShippingField {
    name: string;
}

const Title = ({ currentCard }: IProps) => {
    const dispatch = useAppDispatch();

    const [isEdit, setIsEdit] = useState(false);

    const { register, handleSubmit } = useForm<IShippingField>();

    const onSubmit: SubmitHandler<IShippingField> = ({ name }) => {
        dispatch(
            updateCards({
                author: currentCard.author,
                name,
                columnId: currentCard.columnId,
                description: currentCard.description,
                id: currentCard.id,
            })
        );
        setIsEdit(false);
    };

    return isEdit ? (
        <UpdateTitleForm onSubmit={handleSubmit(onSubmit)}>
            <InputTitle
                {...register("name", {
                    required: true,
                    value: currentCard.name,
                })}
            />
            <SubmitButton>
                <img src={accept} alt="" />
            </SubmitButton>
        </UpdateTitleForm>
    ) : (
        <CardTitle onClick={() => setIsEdit(true)}>
            Current card - <i>{currentCard.name}</i>
        </CardTitle>
    );
};

export default Title;
