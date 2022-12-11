import React, { useState } from "react";
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
import { ICardInfo, IColumn } from "../../interfaces/baseInterfaces";
import EditDescription from "./EditDescription/EditDescription";
import CreateComment from "./CreateComment/CreateComment";
import Title from "./Title/Title";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setViewedCard } from "../../redux/ducks/viewedCard/reducers";
import { deleteCard } from "../../redux/ducks/columns/reducers";

const CardPopup = ({ cardId, columnId }: ICardInfo) => {
    const [isEditDescription, setIsEditDescription] = useState(false);

    const columns = useAppSelector((state) => state.columns.columns);
    const dispatch = useAppDispatch();

    const currentColumn: IColumn | undefined = columns.find(
        (column: { id: number }) => column.id === columnId
    );

    const currentCard = currentColumn?.cards.find(
        (card: { id: number }) => card.id === cardId
    );

    const onDeleteCard = () => {
        dispatch(deleteCard({ cardId, columnId }));
        dispatch(
            setViewedCard({
                cardId: undefined,
                columnId: undefined,
            })
        );
    };

    return (
        <BackdropWrapper>
            {currentColumn && currentCard && (
                <CardContainer>
                    <CloseButton
                        onClick={() =>
                            dispatch(
                                setViewedCard({
                                    cardId: undefined,
                                    columnId: undefined,
                                })
                            )
                        }
                    >
                        <img src={close} alt="" />
                    </CloseButton>
                    <Title
                        currentCard={currentCard}
                        cardInfo={{ cardId, columnId }}
                    />
                    <Subtitle>Column - {currentColumn.name}</Subtitle>
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
                                cardInfo={{ cardId, columnId }}
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
                            {currentCard.comments?.map((comment) => (
                                <Comment
                                    currentCard={currentCard}
                                    cardInfo={{ cardId, columnId }}
                                    commentInfo={comment}
                                    key={comment.id}
                                />
                            ))}
                        </CommentsContainer>
                        <CreateComment
                            currentCard={currentCard}
                            cardInfo={{ cardId, columnId }}
                        />
                    </CommentsWrapper>
                    <DeleteButton onClick={onDeleteCard}>
                        Delete card
                    </DeleteButton>
                </CardContainer>
            )}
        </BackdropWrapper>
    );
};

export default CardPopup;
