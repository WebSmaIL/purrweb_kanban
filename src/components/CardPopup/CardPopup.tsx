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
import { StateContext } from "../../api/ContextAPI";
import Title from "./Title/Title";
import { cloneDeep } from "lodash";
import { replaceColumn } from "../../helpers/helpers";

const CardPopup = ({ cardId, columnId }: ICardInfo) => {
    const [isEditDescription, setIsEditDescription] = useState(false);
    const context = useContext(StateContext);

    const currentColumn = context.columns.find(
        (column: { id: number }) => column.id === columnId
    );

    const currentCard = currentColumn?.cards.find(
        (card: { id: number }) => card.id === cardId
    );

    const deleteCard = () => {
        const columnCopy = cloneDeep(currentColumn);
        if (columnCopy) {
            columnCopy.cards = columnCopy.cards.filter(
                (card) => card.id !== cardId
            );
            const updatedColumns = replaceColumn(
                context.columns,
                columnId,
                columnCopy
            );
            context.setViewedCard(undefined);
            context.setColumns(updatedColumns);
        }
    };

    return (
        <BackdropWrapper>
            {currentColumn && currentCard && (
                <CardContainer>
                    <CloseButton
                        onClick={() => context.setViewedCard(undefined)}
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
                                    key={comment.id}
                                    id={comment.id}
                                    author={comment.author}
                                    content={comment.content}
                                />
                            ))}
                        </CommentsContainer>
                        <CreateComment
                            currentCard={currentCard}
                            cardInfo={{ cardId, columnId }}
                        />
                    </CommentsWrapper>
                    <DeleteButton onClick={deleteCard}>
                        Delete card
                    </DeleteButton>
                </CardContainer>
            )}
        </BackdropWrapper>
    );
};

export default CardPopup;
