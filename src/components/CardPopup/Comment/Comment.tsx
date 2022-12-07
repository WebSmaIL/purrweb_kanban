import React, { useContext, useState } from "react";
import {
    CommentContainer,
    Author,
    Content,
    DeleteButton,
    ChangeButton,
    InputComment,
} from "./style";
import { pen, del } from "../../../assets";
import { ICard, ICardInfo } from "../../../interfaces/baseInterfaces";
import { StateContext } from "../../../api/ContextAPI";
import { replaceCard } from "../../../helpers/helpers";
import { cloneDeep } from "lodash";

interface IProps {
    cardInfo: ICardInfo;
    currentCard: ICard;
    id: number;
    author: string;
    content: string;
}

const Comment = ({ id, author, content, cardInfo, currentCard }: IProps) => {
    const context = useContext(StateContext);

    const [commentText, setCommentText] = useState(content);
    const [isEdit, setIsEdit] = useState(false);

    const deleteComment = () => {
        const cardCopy = cloneDeep(currentCard);
        cardCopy.comments = cardCopy.comments.filter(
            (comment) => comment.id !== id
        );

        const updatedColumns = replaceCard(context.columns, cardInfo, cardCopy);
        context.setColumns(updatedColumns);
    };

    const updateComment = () => {
        const cardCopy = cloneDeep(currentCard);
        const updatedComments = cardCopy.comments.map((comment) =>
            comment.id === id
                ? { id, author: comment.author, content: commentText }
                : comment
        );
        cardCopy.comments = updatedComments;

        const updatedColumns = replaceCard(context.columns, cardInfo, cardCopy);
        context.setColumns(updatedColumns);
        setIsEdit(!isEdit);
    };

    return (
        <CommentContainer>
            <Author>
                <i>{author}</i>:
            </Author>
            {isEdit ? (
                <InputComment
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    onBlur={updateComment}
                />
            ) : (
                <Content>{commentText}</Content>
            )}
            {!isEdit && (
                <>
                    <ChangeButton
                        onClick={() => {
                            setIsEdit(!isEdit);
                        }}
                    >
                        <img src={pen} alt="" />
                    </ChangeButton>
                    <DeleteButton onClick={deleteComment}>
                        <img src={del} alt="" />
                    </DeleteButton>
                </>
            )}
        </CommentContainer>
    );
};

export default Comment;
