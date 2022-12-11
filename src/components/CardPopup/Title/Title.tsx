import React, { useState } from "react";
import { ICard, ICardInfo } from "../../../interfaces/baseInterfaces";
import { InputTitle, CardTitle, UpdateTitleForm, SubmitButton } from "./style";
import { accept } from "../../../assets";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "../../../hooks";
import {
    updateCards,
} from "../../../redux/ducks/columns/reducers";

interface IProps {
    currentCard: ICard;
    cardInfo: ICardInfo;
}

interface IShippingField {
    name: string;
}

const Title = ({ currentCard, cardInfo }: IProps) => {
    const dispatch = useAppDispatch();

    const [isEdit, setIsEdit] = useState(false);

    const { register, handleSubmit } = useForm<IShippingField>();

    const onSubmit: SubmitHandler<IShippingField> = ({ name }) => {
        dispatch(
            updateCards({
                currentCard: { ...currentCard, name },
                cardInfo,
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
