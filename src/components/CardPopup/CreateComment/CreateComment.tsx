import React from "react";
import { CommentInput, NewCommentForm, SendButton } from "./style";
import { send } from "../../../assets";
import { IComment } from "../../../interfaces/baseInterfaces";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { commentsActions } from "../../../redux/ducks/comments";
import { userSelectors } from "../../../redux/ducks/user";

interface IProps {
    cardId: number
}

interface IShippingField {
    commentText: string;
}

const CreateComment = ({ cardId }: IProps) => {
    const userName = useAppSelector(userSelectors.getName);
    const dispatch = useAppDispatch();

    const { register, handleSubmit, reset } = useForm<IShippingField>();

    const onSubmit: SubmitHandler<IShippingField> = ({ commentText }) => {
        const comment: IComment = {
            id: Date.now(),
            cardId,
            author: userName,
            content: commentText,
        };
        dispatch(
            commentsActions.addComment(comment)
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
