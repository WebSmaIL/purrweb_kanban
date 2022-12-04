import React, { useContext, useState } from "react";
import { DescriptionForm, DescriptionInput, SubmitDescription } from "./style";
import assets from "../../../assets";
import { ICard, IColumn, ICardInfo } from "../../../interfaces/baseInterfaces";
import { ColumnsContext } from "../../../api/ContextAPI";

const { send } = assets;

interface IProps {
    cardInfo: ICardInfo;
    findCard: (
        columns: IColumn[],
        columnId: number,
        cardId: number
    ) => ICard | undefined;
    setIsEditDescription: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditDescription = ({
    cardInfo,
    findCard,
    setIsEditDescription,
}: IProps) => {
    const [editableDescription, setEditableDescription] = useState(
        cardInfo.description
    );
    const context = useContext(ColumnsContext);

    const updateDescription = (newDescription: string) => {
        const columns = [...context.columns];
        const targetCard = findCard(
            columns,
            cardInfo.columnId,
            cardInfo.cardId
        );
        if (targetCard) {
            targetCard.description = newDescription;
            context.setViewedCard({ ...cardInfo, description: newDescription });
            context.setColumns(columns);
        }
        setIsEditDescription(false);
    };

    return (
        <DescriptionForm>
            <DescriptionInput
                placeholder="Enter a new description"
                value={editableDescription}
                onChange={(e) => {
                    setEditableDescription(e.target.value);
                }}
            />
            <SubmitDescription
                onClick={(e) => {
                    e.preventDefault();
                    updateDescription(editableDescription);
                }}
            >
                <img src={send} alt="" />
            </SubmitDescription>
        </DescriptionForm>
    );
};

export default EditDescription;
