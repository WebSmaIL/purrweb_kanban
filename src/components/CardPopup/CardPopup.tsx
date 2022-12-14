import React, { useContext, useState } from "react";
import {
    BackdropWrapper,
    CardContainer,
    DescriptionContainer,
    EditButton,
    Description,
    CommentsWrapper,
    Subtitle,
    DeleteButton,
    CommentsContainer,
    CloseButton,
    Author,
} from "./style";
import { pen, close } from "../../assets/index";
import Comment from "./Comment/Comment";
import EditDescription from "./EditDescription/EditDescription";
import CreateComment from "./CreateComment/CreateComment";
import Title from "./Title/Title";
import { CurrentCardContext } from "../../App";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { commentsSelectors } from "../../redux/ducks/comments";
import { cardsSelectors, cardsActions } from "../../redux/ducks/cards";

interface IProps {
    cardId: number;
}

const CardPopup = ({ cardId }: IProps) => {
    const { setCurrentCard } = useContext(CurrentCardContext);
    const [isEditDescription, setIsEditDescription] = useState(false);

    const comments = useAppSelector(commentsSelectors.getCommentsByCardId(cardId));
    const currentCard = useAppSelector(cardsSelectors.getCardById(cardId));

    const dispatch = useAppDispatch();

    return (
        <BackdropWrapper>
            {currentCard && (
                <CardContainer>
                    <CloseButton
                        onClick={() => setCurrentCard(0)}
                    >
                        <img src={close} alt="" />
                    </CloseButton>
                    <Title cardId={cardId} currentCard={currentCard} />
                    <Subtitle>Column - {currentCard.columnName}</Subtitle>
                    <Author>
                        Author - <i>{currentCard.author}</i>
                    </Author>
                    <Subtitle>
                        <i>Description</i>
                    </Subtitle>
                    <DescriptionContainer>
                        {isEditDescription ? (
                            <EditDescription
                                cardId={cardId}
                                currentCard={currentCard}
                                setIsEditDescription={setIsEditDescription}
                            />
                        ) : (
                            <>
                                <Description>
                                    {currentCard.description
                                        ? currentCard.description
                                        : "This card don`t have description"}
                                </Description>
                                <EditButton
                                    onClick={() => setIsEditDescription(true)}
                                >
                                    <img src={pen} alt="" />
                                </EditButton>
                            </>
                        )}
                    </DescriptionContainer>
                    <Subtitle>
                        <i>Comments</i>
                    </Subtitle>
                    <CommentsWrapper>
                        <CommentsContainer>
                            {comments?.map((comment) => (
                                <Comment
                                    commentInfo={comment}
                                    key={comment.id}
                                />
                            ))}
                        </CommentsContainer>
                        <CreateComment cardId={cardId} />
                    </CommentsWrapper>
                    <DeleteButton
                        onClick={() => {
                            setCurrentCard(0);
                            dispatch(cardsActions.deleteCard(cardId));
                        }}
                    >
                        Delete card
                    </DeleteButton>
                </CardContainer>
            )}
        </BackdropWrapper>
    );
};

export default CardPopup;
