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
import { getAllComments } from "../../../../redux/ducks/comments";
import { ViewedContext } from "../../../../App";

interface IProps {
    columnId: number;
    id: number;
    name: string;
}

const Card = ({ id, columnId, name }: IProps) => {
    const { setViewedCard } = useContext(ViewedContext);
    const commentsCount = useAppSelector(getAllComments).filter(
        (comment) => comment.cardId === id
    ).length;

    return (
        <CardContainer>
            <TitleContainer>
                <CardTitle>{name}</CardTitle>
                <ViewButton
                    onClick={() =>
                        setViewedCard && setViewedCard({ cardId: id, columnId })
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
