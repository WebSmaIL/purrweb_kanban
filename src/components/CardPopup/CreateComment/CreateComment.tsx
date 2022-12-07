import React, { useContext, useState } from "react";
import { CommentInput, NewCommentForm, SendButton } from "./style";
import { send } from "../../../assets";
import { ICard, ICardInfo } from "../../../interfaces/baseInterfaces";
import { StateContext } from "../../../api/ContextAPI";
import { replaceCard } from "../../../helpers/helpers";
import { cloneDeep } from "lodash";

interface IProps {
    cardInfo: ICardInfo;
    currentCard: ICard;
}

const CreateComment = ({ cardInfo, currentCard }: IProps) => {
    const [commentText, setCommentText] = useState("");
    const context = useContext(StateContext);

    const addComment = (author: string, content: string) => {
        const comment = {
            id: Date.now(),
            author,
            content,
        };
        const cardCopy = cloneDeep(currentCard);
        cardCopy.comments.push(comment);

        const updatedColumns = replaceCard(context.columns, cardInfo, cardCopy);
        context.setColumns(updatedColumns);
        setCommentText("");
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
                    addComment(context.userName, commentText);
                }}
            >
                <img src={send} alt="" />
            </SendButton>
        </NewCommentForm>
    );
};

export default CreateComment;
