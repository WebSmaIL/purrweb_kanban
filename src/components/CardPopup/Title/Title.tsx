import React, { useState } from "react";
import { InputTitle, CardTitle, UpdateTitleForm, SubmitButton } from "./style";
import { accept } from "../../../assets";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "../../../hooks";
import { cardsActions } from "../../../redux/ducks/cards";

interface IProps {
    currentCard: {
        columnName: string | undefined,
        author: string,
        columnId: number,
        description: string,
        name: string,
    }
    cardId: number
}

interface IShippingField {
    name: string;
}

const Title = ({ currentCard, cardId }: IProps) => {
    const dispatch = useAppDispatch();

    const [isEdit, setIsEdit] = useState(false);

    const { register, handleSubmit } = useForm<IShippingField>();

    const onSubmit: SubmitHandler<IShippingField> = ({ name }) => {
        dispatch(
            cardsActions.updateCards({
                author: currentCard.author,
                name,
                columnId: currentCard.columnId,
                description: currentCard.description,
                id: cardId,
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
