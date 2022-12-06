import React, { useContext } from "react";
import { IComment } from "../../../../interfaces/baseInterfaces";
import view from "../../../../assets/view.svg";
import { comment } from "../../../../assets";
import {
    CardContainer,
    CardTitle,
    CommentContainer,
    TitleContainer,
    ViewButton,
} from "./style";
import { StateContext } from "../../../../api/ContextAPI";

interface IProps {
    columnId: number;
    id: number;
    name: string;
    comments: IComment[]
}

const Card = ({ id, columnId, name, comments }: IProps) => {
    const context = useContext(StateContext);

    return (
        <CardContainer>
            <TitleContainer>
                <CardTitle>{name}</CardTitle>
                <ViewButton onClick={()=> context.setViewedCard({cardId: id, columnId})}>
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
