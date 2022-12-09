import { cloneDeep } from "lodash";
import React, { useContext, useState } from "react";
import { StateContext } from "../../../api/ContextAPI";
import { replaceCard } from "../../../helpers/helpers";
import { ICard, ICardInfo } from "../../../interfaces/baseInterfaces";
import { InputTitle, CardTitle, UpdateTitleForm, SubmitButton } from "./style";
import { accept } from "../../../assets";
import { SubmitHandler, useForm } from "react-hook-form";

interface IProps {
    currentCard: ICard;
    cardInfo: ICardInfo;
}

interface IShippingField {
    cardTitle: string;
}

const Title = ({ currentCard, cardInfo }: IProps) => {
    const context = useContext(StateContext);

    const [isEdit, setIsEdit] = useState(false);

    const { register, handleSubmit } = useForm<IShippingField>();

    const onSubmit: SubmitHandler<IShippingField> = ({ cardTitle }) => {
        const cardCopy = cloneDeep(currentCard);
        cardCopy.name = cardTitle;
        const updatedColumns = replaceCard(context.columns, cardInfo, cardCopy);
        context.setColumns(updatedColumns);
        setIsEdit(false);
    };

    return isEdit ? (
        <UpdateTitleForm onSubmit={handleSubmit(onSubmit)}>
            <InputTitle
                {...register("cardTitle", {
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
