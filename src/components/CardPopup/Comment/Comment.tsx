import React, { useContext, useState } from "react";
import {
    CommentContainer,
    Author,
    Content,
    DeleteButton,
    ChangeButton,
    InputComment,
    EditCommentForm,
    SubmitButton,
} from "./style";
import { pen, del, accept } from "../../../assets";
import { ICard, ICardInfo } from "../../../interfaces/baseInterfaces";
import { StateContext } from "../../../api/ContextAPI";
import { replaceCard } from "../../../helpers/helpers";
import { cloneDeep } from "lodash";
import { SubmitHandler, useForm } from "react-hook-form";

interface IProps {
    cardInfo: ICardInfo;
    currentCard: ICard;
    id: number;
    author: string;
    content: string;
}

interface IShippingFields {
    commentText: string;
}

const Comment = ({ id, author, content, cardInfo, currentCard }: IProps) => {
    const context = useContext(StateContext);

    const [isEdit, setIsEdit] = useState(false);

    const { register, handleSubmit } = useForm<IShippingFields>();

    const onSubmitEditComment: SubmitHandler<IShippingFields> = ({
        commentText,
    }) => {
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

    const deleteComment = () => {
        const cardCopy = cloneDeep(currentCard);
        cardCopy.comments = cardCopy.comments.filter(
            (comment) => comment.id !== id
        );

        const updatedColumns = replaceCard(context.columns, cardInfo, cardCopy);
        context.setColumns(updatedColumns);
    };

    return (
        <CommentContainer>
            <Author>
                <i>{author}</i>:
            </Author>
            {isEdit ? (
                <EditCommentForm onSubmit={handleSubmit(onSubmitEditComment)}>
                    <InputComment
                        {...register("commentText", {
                            required: true,
                        })}
                    />
                    <SubmitButton>
                        <img src={accept} alt="" />
                    </SubmitButton>
                </EditCommentForm>
            ) : (
                <Content>{content}</Content>
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
