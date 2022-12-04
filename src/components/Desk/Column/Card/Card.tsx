import React, { useContext } from "react";
import { ICard } from "../../../../interfaces/baseInterfaces";
import view from "../../../../assets/view.svg";
import comment from "../../../../assets/comment.svg";
import {
    CardContainer,
    CardTitle,
    CommentContainer,
    TitleContainer,
    ViewButton,
} from "./style";
import { ColumnsContext } from "../../../../api/ContextAPI";

interface IProps extends ICard {
    columnId: number;
    columnName: string;
}

const Card = ({ id, columnId, name, description, comments, author, columnName }: IProps) => {
    const context = useContext(ColumnsContext);

    return (
        <CardContainer>
            <TitleContainer>
                <CardTitle>{name}</CardTitle>
                <ViewButton onClick={()=> context.setViewedCard({cardId: id, columnName, author, columnId, name, description, comments})}>
                    <img src={view} alt="" />
                </ViewButton>
            </TitleContainer>
            <CommentContainer>
                <img src={comment} alt="" />
                <span>{comments.length}</span>
            </CommentContainer>
        </CardContainer>
    );
};

export default Card;
