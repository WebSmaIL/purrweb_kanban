import React, { useContext } from "react";
import { DescriptionForm, DescriptionInput, SubmitDescription } from "./style";
import { send } from "../../../assets";
import { ICard, ICardInfo } from "../../../interfaces/baseInterfaces";
import { StateContext } from "../../../api/ContextAPI";
import { replaceCard } from "../../../helpers/helpers";
import { cloneDeep } from "lodash";
import { SubmitHandler, useForm } from "react-hook-form";

interface IProps {
    currentCard: ICard
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
    const context = useContext(StateContext);

    const { register, handleSubmit } = useForm<IShippingFields>();

    const onSubmit: SubmitHandler<IShippingFields> = ({ description }) => {
        const cardCopy = cloneDeep(currentCard);
        cardCopy.description = description;
        
        const updatedColumns = replaceCard(context.columns, cardInfo, cardCopy)
        context.setColumns(updatedColumns);
        setIsEditDescription(false);
    };

    return (
        <DescriptionForm onSubmit={handleSubmit(onSubmit)}>
            <DescriptionInput
                {...register("description", {
                    value: currentCard.description
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
