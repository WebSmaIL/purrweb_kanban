import React from "react";
import { CommentInput, NewCommentForm, SendButton } from "./style";
import { send } from "../../../assets";
import { ICard, IComment } from "../../../interfaces/baseInterfaces";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { addComment } from "../../../redux/ducks/comments";

interface IProps {
    currentCard: ICard;
}

interface IShippingField {
    commentText: string;
}

const CreateComment = ({ currentCard }: IProps) => {
    const userName = useAppSelector((state) => state.userInfo.name);
    const dispatch = useAppDispatch();

    const { register, handleSubmit, reset } = useForm<IShippingField>();

    const onSubmit: SubmitHandler<IShippingField> = ({ commentText }) => {
        const comment: IComment = {
            id: Date.now(),
            cardId: currentCard.id,
            author: userName,
            content: commentText,
        };
        dispatch(
            addComment(comment)
        );
        reset();
    };

    return (
        <NewCommentForm onSubmit={handleSubmit(onSubmit)}>
            <CommentInput
                {...register("commentText", {
                    required: true,
                })}
                placeholder="Enter comment text..."
            ></CommentInput>
            <SendButton>
                <img src={send} alt="" />
            </SendButton>
        </NewCommentForm>
    );
};

export default CreateComment;
