import React from "react";
import { DescriptionForm, DescriptionInput, SubmitDescription } from "./style";
import { send } from "../../../assets";
import { ICard, ICardInfo } from "../../../interfaces/baseInterfaces";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "../../../hooks";
import { updateCards } from "../../../redux/ducks/columns/reducers";

interface IProps {
    currentCard: ICard;
    cardInfo: ICardInfo;
    setIsEditDescription: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IShippingFields {
    description: string;
}

const EditDescription = ({
    currentCard,
    cardInfo,
    setIsEditDescription,
}: IProps) => {
    const dispatch = useAppDispatch();

    const { register, handleSubmit } = useForm<IShippingFields>();

    const onSubmit: SubmitHandler<IShippingFields> = ({ description }) => {
        dispatch(
            updateCards({
                currentCard: {...currentCard, description},
                cardInfo
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
