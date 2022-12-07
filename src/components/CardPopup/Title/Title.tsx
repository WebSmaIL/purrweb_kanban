import { cloneDeep } from "lodash";
import React, { useContext, useState } from "react";
import { StateContext } from "../../../api/ContextAPI";
import { replaceCard } from "../../../helpers/helpers";
import { ICard, ICardInfo } from "../../../interfaces/baseInterfaces";
import { InputTitle, CardTitle } from "./style";

interface IProps {
    currentCard: ICard;
    cardInfo: ICardInfo;
}

const Title = ({ currentCard, cardInfo }: IProps) => {
    const context = useContext(StateContext);

    const [isEdit, setIsEdit] = useState(false);
    const [titleText, setTitleText] = useState(currentCard.name);

    const updateTitle = () => {
            const cardCopy = cloneDeep(currentCard);
            cardCopy.name = titleText;
            
            const updatedColumns = replaceCard(context.columns, cardInfo, cardCopy)
            context.setColumns(updatedColumns);
            setIsEdit(false);
    };

    return isEdit ? (
        <InputTitle
            value={titleText}
            onChange={(e) => setTitleText(e.target.value)}
            onBlur={() => updateTitle()}
        />
    ) : (
        <CardTitle onClick={() => setIsEdit(true)}>
            Current card - <i>{currentCard.name}</i>
        </CardTitle>
    );
};

export default Title;
