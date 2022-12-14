import React, { useState } from "react";
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
import { IComment } from "../../../interfaces/baseInterfaces";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "../../../hooks";
import { commentsActions } from "../../../redux/ducks/comments";

interface IProps {
    commentInfo: IComment;
}

interface IShippingFields {
    commentText: string;
}

const Comment = ({ commentInfo }: IProps) => {
    const dispatch = useAppDispatch();

    const [isEdit, setIsEdit] = useState(false);

    const { register, handleSubmit } = useForm<IShippingFields>();

    const onFormSubmit: SubmitHandler<IShippingFields> = ({ commentText }) => {
        dispatch(
            commentsActions.updateComments({
                ...commentInfo,
                content: commentText,
            })
        );
        setIsEdit(!isEdit);
    };

    return (
        <CommentContainer>
            <Author>
                <i>{commentInfo.author}</i>:
            </Author>
            {isEdit ? (
                <EditCommentForm onSubmit={handleSubmit(onFormSubmit)}>
                    <InputComment
                        {...register("commentText", {
                            required: true,
                            value: commentInfo.content,
                        })}
                    />
                    <SubmitButton>
                        <img src={accept} alt="" />
                    </SubmitButton>
                </EditCommentForm>
            ) : (
                <Content>{commentInfo.content}</Content>
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
                    <DeleteButton
                        onClick={() => dispatch(commentsActions.deleteComment(commentInfo.id))}
                    >
                        <img src={del} alt="" />
                    </DeleteButton>
                </>
            )}
        </CommentContainer>
    );
};

export default Comment;
