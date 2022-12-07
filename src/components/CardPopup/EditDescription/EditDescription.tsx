import React, { useContext, useState } from "react";
import { DescriptionForm, DescriptionInput, SubmitDescription } from "./style";
import { send } from "../../../assets";
import { ICard, ICardInfo } from "../../../interfaces/baseInterfaces";
import { StateContext } from "../../../api/ContextAPI";
import { replaceCard } from "../../../helpers/helpers";
import { cloneDeep } from "lodash";

interface IProps {
    currentCard: ICard
    cardInfo: ICardInfo;
    setIsEditDescription: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditDescription = ({
    currentCard,
    cardInfo,
    setIsEditDescription,
}: IProps) => {
    const [descriprionText, setEditableDescription] = useState(
        currentCard.description
    );
    const context = useContext(StateContext);

    const updateDescription = () => {
        const cardCopy = cloneDeep(currentCard);
        cardCopy.description = descriprionText;
        
        const updatedColumns = replaceCard(context.columns, cardInfo, cardCopy)
        context.setColumns(updatedColumns);
        setIsEditDescription(false);
    };

    return (
        <DescriptionForm>
            <DescriptionInput
                placeholder="Enter a new description"
                value={descriprionText}
                onChange={(e) => {
                    setEditableDescription(e.target.value);
                }}
            />
            <SubmitDescription
                onClick={(e) => {
                    e.preventDefault();
                    updateDescription();
                }}
            >
                <img src={send} alt="" />
            </SubmitDescription>
        </DescriptionForm>
    );
};

export default EditDescription;
