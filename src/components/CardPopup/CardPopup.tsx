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
import { ICardInfo } from "../../interfaces/baseInterfaces";
import EditDescription from "./EditDescription/EditDescription";
import CreateComment from "./CreateComment/CreateComment";
import Title from "./Title/Title";
import { ViewedContext } from "../../App";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getCommentsByCardId } from "../../redux/ducks/comments";
import { deleteCard, getCardById } from "../../redux/ducks/cards";
import { getColumnByIdSelector } from "../../redux/ducks/columns/";

interface IProps {
    cardInfo: ICardInfo;
}

const CardPopup = ({ cardInfo }: IProps) => {
    const { setViewedCard } = useContext(ViewedContext);
    const [isEditDescription, setIsEditDescription] = useState(false);

    const comments = useAppSelector(getCommentsByCardId(cardInfo.cardId));
    const currentCard = useAppSelector(getCardById(cardInfo.cardId));
    const columnName = useAppSelector(getColumnByIdSelector(cardInfo.columnId))?.name;

    const dispatch = useAppDispatch();


    return (
        <BackdropWrapper>
            {currentCard && (
                <CardContainer>
                    <CloseButton
                        onClick={() =>
                            setViewedCard && setViewedCard(undefined)
                        }
                    >
                        <img src={close} alt="" />
                    </CloseButton>
                    <Title currentCard={currentCard} />
                    <Subtitle>Column - {columnName || "UNKNOW"}</Subtitle>
                    <Author>
                        Author - <i>{currentCard.author}</i>
                    </Author>
                    <Subtitle>
                        <i>Description</i>
                    </Subtitle>
                    <DescriptionContainer>
                        {isEditDescription ? (
                            <EditDescription
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
                                    currentCard={currentCard}
                                    commentInfo={comment}
                                    key={comment.id}
                                />
                            ))}
                        </CommentsContainer>
                        <CreateComment currentCard={currentCard} />
                    </CommentsWrapper>
                    <DeleteButton
                        onClick={() => {
                            setViewedCard && setViewedCard(undefined);
                            dispatch(deleteCard(cardInfo.cardId));
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
