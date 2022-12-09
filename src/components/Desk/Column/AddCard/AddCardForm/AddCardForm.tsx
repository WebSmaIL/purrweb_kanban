import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AcceptAddCardButton, AddCardInput, ChangeTitleForm } from "./style";

interface IProps {
    onAddCard: (cardTitle: string) => void;
}

interface IShippingField {
    cardTitle: string;
}

const AddCardForm = ({ onAddCard }: IProps) => {
    const { register, handleSubmit } = useForm<IShippingField>();
    const onSubmit: SubmitHandler<IShippingField> = ({ cardTitle }) =>
        onAddCard(cardTitle);

    return (
        <ChangeTitleForm onSubmit={handleSubmit(onSubmit)}>
            <AddCardInput
                {...register("cardTitle", {
                    required: true,
                })}
                placeholder="Enter name..."
            />
            <AcceptAddCardButton>Accept</AcceptAddCardButton>
        </ChangeTitleForm>
    );
};

export default AddCardForm;
