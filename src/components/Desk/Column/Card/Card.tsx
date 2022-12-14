import React, { useContext } from "react";
import view from "../../../../assets/view.svg";
import { comment } from "../../../../assets";
import {
    CardContainer,
    CardTitle,
    CommentContainer,
    TitleContainer,
    ViewButton,
} from "./style";
import { useAppSelector } from "../../../../hooks";
import { commentsSelectors } from "../../../../redux/ducks/comments";
import { CurrentCardContext } from "../../../../App";

interface IProps {
    id: number;
    name: string;
}

const Card = ({ id, name }: IProps) => {
    const { setCurrentCard } = useContext(CurrentCardContext);
    const commentsCount = useAppSelector(commentsSelectors.getAllComments).filter(
        (comment) => comment.cardId === id
    ).length;

    return (
        <CardContainer>
            <TitleContainer>
                <CardTitle>{name}</CardTitle>
                <ViewButton
                    onClick={() =>
                        setCurrentCard(id)
                    }
                >
                    <img src={view} alt="" />
                </ViewButton>
            </TitleContainer>
            <CommentContainer>
                <img src={comment} alt="" />
                <span>{commentsCount}</span>
            </CommentContainer>
        </CardContainer>
    );
};

export default Card;
