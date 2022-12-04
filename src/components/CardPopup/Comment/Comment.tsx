import React, { useContext, useState } from "react";
import {
    CommentContainer,
    Author,
    Content,
    DeleteButton,
    ChangeButton,
    InputComment,
} from "./style";
import assets from "../../../assets";
import { ICardInfo, IColumn, ICard } from "../../../interfaces/baseInterfaces";
import { ColumnsContext } from "../../../api/ContextAPI";

interface IProps {
    cardInfo: ICardInfo;
    findCard: (
        columns: IColumn[],
        columnId: number,
        cardId: number
    ) => ICard | undefined;
    id: number;
    author: string;
    content: string;
}

const Comment = ({ id, author, content, cardInfo, findCard }: IProps) => {
    const context = useContext(ColumnsContext);

    const [commentText, setCommentText] = useState(content);
    const [isEdit, setIsEdit] = useState(false);

    const deleteComment = () => {
        const columns = [...context.columns];
        const targetCard = findCard(
            columns,
            cardInfo.columnId,
            cardInfo.cardId
        );
        if (targetCard) {
            targetCard.comments = targetCard.comments.filter(
                (comment) => comment.id !== id
            );
            context.setViewedCard({
                ...cardInfo,
                comments: targetCard.comments,
            });
            context.setColumns(columns);
        }
    };

    const updateComment = () => {
        const columns = [...context.columns];
        if (cardInfo) {
            const targetCard = findCard(
                columns,
                cardInfo.columnId,
                cardInfo.cardId
            );
            if (targetCard) {
                const targetComment = targetCard.comments.find(
                    (comment) => comment.id === id
                );
                if (targetComment) {
                    targetComment.content = commentText;
                    context.setViewedCard({
                        ...cardInfo,
                        comments: targetCard.comments,
                    });
                    context.setColumns(columns);
                }
            }
        }
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
                        <img src={assets.pen} alt="" />
                    </ChangeButton>
                    <DeleteButton onClick={deleteComment}>
                        <img src={assets.del} alt="" />
                    </DeleteButton>
                </>
            )}
        </CommentContainer>
    );
};

export default Comment;
