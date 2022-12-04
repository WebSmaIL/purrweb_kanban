import React, { useContext, useState } from "react";
import { CommentInput, NewCommentForm, SendButton } from "./style";
import assets from "../../../assets";
import { ICard, ICardInfo, IColumn } from "../../../interfaces/baseInterfaces";
import { ColumnsContext } from "../../../api/ContextAPI";

const { send } = assets;

interface IProps {
    cardInfo: ICardInfo;
    findCard: (
        columns: IColumn[],
        columnId: number,
        cardId: number
    ) => ICard | undefined;
}

const CreateComment = ({ cardInfo, findCard }: IProps) => {
    const [commentText, setCommentText] = useState("");
    const context = useContext(ColumnsContext);

    const updateComments = (author: string, content: string) => {
        const comment = {
            id: Date.now(),
            author,
            content,
        };

        const columns = [...context.columns];
        const targetCard = findCard(
            columns,
            cardInfo.columnId,
            cardInfo.cardId
        );
        if (targetCard) {
            targetCard.comments.push(comment);
            context.setViewedCard({
                ...cardInfo,
                comments: targetCard.comments,
            });
            context.setColumns(columns);
            setCommentText("");
        }
    };

    return (
        <NewCommentForm>
            <CommentInput
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Enter comment text..."
            ></CommentInput>
            <SendButton
                onClick={(e) => {
                    e.preventDefault();
                    updateComments(context.userName, commentText);
                }}
            >
                <img src={send} alt="" />
            </SendButton>
        </NewCommentForm>
    );
};

export default CreateComment;
