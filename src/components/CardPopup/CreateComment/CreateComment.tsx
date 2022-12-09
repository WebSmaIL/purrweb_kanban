import React, { useContext } from "react";
import { CommentInput, NewCommentForm, SendButton } from "./style";
import { send } from "../../../assets";
import { ICard, ICardInfo } from "../../../interfaces/baseInterfaces";
import { StateContext } from "../../../api/ContextAPI";
import { replaceCard } from "../../../helpers/helpers";
import { cloneDeep } from "lodash";
import { SubmitHandler, useForm } from "react-hook-form";

interface IProps {
    cardInfo: ICardInfo;
    currentCard: ICard;
}

interface IShippingField {
    commentText: string;
}

const CreateComment = ({ cardInfo, currentCard }: IProps) => {
    const context = useContext(StateContext);

    const { register, handleSubmit, reset } = useForm<IShippingField>();
    
    const onSubmit: SubmitHandler<IShippingField> = ({ commentText }) => {
        const comment = {
            id: Date.now(),
            author: context.userName,
            content: commentText,
        };
        const cardCopy = cloneDeep(currentCard);
        cardCopy.comments.push(comment);

        const updatedColumns = replaceCard(context.columns, cardInfo, cardCopy);
        context.setColumns(updatedColumns);
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
