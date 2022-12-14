import React from "react";
import { DescriptionForm, DescriptionInput, SubmitDescription } from "./style";
import { send } from "../../../assets";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "../../../hooks";
import { cardsActions } from "../../../redux/ducks/cards";

interface IProps {
    currentCard: {
        columnName: string | undefined;
        author: string;
        columnId: number;
        description: string;
        name: string;
    };
    cardId: number;
    setIsEditDescription: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IShippingFields {
    description: string;
}

const EditDescription = ({
    cardId,
    currentCard,
    setIsEditDescription,
}: IProps) => {
    const dispatch = useAppDispatch();

    const { register, handleSubmit } = useForm<IShippingFields>();

    const onSubmit: SubmitHandler<IShippingFields> = ({ description }) => {
        dispatch(
            cardsActions.updateCards({
                author: currentCard.author,
                columnId: currentCard.columnId,
                description: description,
                name: currentCard.name,
                id: cardId,
            })
        );
        setIsEditDescription(false);
    };

    return (
        <DescriptionForm onSubmit={handleSubmit(onSubmit)}>
            <DescriptionInput
                {...register("description", {
                    value: currentCard.description,
                })}
                placeholder="Enter a new description"
            />
            <SubmitDescription>
                <img src={send} alt="" />
            </SubmitDescription>
        </DescriptionForm>
    );
};

export default EditDescription;
