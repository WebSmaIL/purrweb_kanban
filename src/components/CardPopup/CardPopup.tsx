import React, { useState } from "react";
import {
    BackdropWrapper,
    CardContainer,
    Title,
    DescriptionContainer,
    EditButton,
    Description,
    CommentsContainer,
    Subtitle,
    CommentInput,
    NewCommentForm,
    SendButton,
    DescriptionForm,
    DescriptionInput,
    SubmitDescription,
} from "./style";
import assets from "../../assets/index";
import Comment from "./Comment/Comment";

const { pen, send } = assets;

interface IProps {
    cardInfo: {
        columnID: number;
        cardID: number;
        name: string;
        description: string;
        comments: {
            author: string;
            content: string;
        }[];
    };
}

const CardPopup = ({ cardInfo }: IProps) => {
    const { cardID, columnID, comments, description, name } = cardInfo;

    const [ isEditDescription, setIsEditDescription ] = useState(false);

    return (
        <BackdropWrapper>
            <CardContainer>
                <Title>
                    Current card - <i>{name}</i>
                </Title>
                <Subtitle>
                    <i>Description</i>
                </Subtitle>
                <DescriptionContainer>
                    {isEditDescription ? (
                        <DescriptionForm>
                            <DescriptionInput placeholder="Enter a new description" />
                            <SubmitDescription><img src={send} alt="" /></SubmitDescription>
                        </DescriptionForm>
                    ) : (
                        <>
                            <Description>
                                {description
                                    ? description
                                    : "This card don`t have description"}
                            </Description>
                            <EditButton onClick={()=> setIsEditDescription(true)}>
                                <img src={pen} alt="" />
                            </EditButton>
                        </>
                    )}
                </DescriptionContainer>
                <Subtitle>
                    <i>Comments</i>
                </Subtitle>
                <CommentsContainer>
                    {comments.length > 0 ? (
                        comments.map((comment) => (
                            <Comment
                                author={comment.author}
                                content={comment.content}
                            />
                        ))
                    ) : (
                        <span>This card don`t have comments</span>
                    )}

                    <NewCommentForm>
                        <CommentInput placeholder="Enter comment text..."></CommentInput>
                        <SendButton>
                            <img src={send} alt="" />
                        </SendButton>
                    </NewCommentForm>
                </CommentsContainer>
            </CardContainer>
        </BackdropWrapper>
    );
};

export default CardPopup;
