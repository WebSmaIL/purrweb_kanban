import React from "react";
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
import { useAppDispatch } from "../../../../hooks";
import {setViewedCard} from "../../../../redux/ducks/viewedCard/reducers";

interface IProps {
    columnId: number;
    id: number;
    name: string;
    comments: IComment[]
}

const Card = ({ id, columnId, name, comments }: IProps) => {
    const dispatch = useAppDispatch();

    return (
        <CardContainer>
            <TitleContainer>
                <CardTitle>{name}</CardTitle>
                <ViewButton onClick={()=> dispatch(setViewedCard({cardId: id, columnId}))}>
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
