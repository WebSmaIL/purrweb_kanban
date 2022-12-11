import React from "react";
import { CommentInput, NewCommentForm, SendButton } from "./style";
import { send } from "../../../assets";
import { ICard, ICardInfo } from "../../../interfaces/baseInterfaces";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { updateCards } from "../../../redux/ducks/columns/reducers";

interface IProps {
    cardInfo: ICardInfo;
    currentCard: ICard;
}

interface IShippingField {
    commentText: string;
}

const CreateComment = ({ cardInfo, currentCard }: IProps) => {
    const userName = useAppSelector((state) => state.userInfo.name);
    const dispatch = useAppDispatch();

    const { register, handleSubmit, reset } = useForm<IShippingField>();

    const onSubmit: SubmitHandler<IShippingField> = ({ commentText }) => {
        const comment = {
            id: Date.now(),
            author: userName,
            content: commentText,
        };
        dispatch(
            updateCards({
                currentCard: {
                    ...currentCard,
                    comments: [...currentCard.comments, comment],
                },
                cardInfo,
            })
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
