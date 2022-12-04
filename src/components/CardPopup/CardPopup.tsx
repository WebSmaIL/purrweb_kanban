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
import assets from "../../assets/index";
import Comment from "./Comment/Comment";
import { IViewedCard, IColumn } from "../../interfaces/baseInterfaces";
import EditDescription from "./EditDescription/EditDescription";
import CreateComment from "./CreateComment/CreateComment";
import { ColumnsContext } from "../../api/ContextAPI";
import Title from "./Title/Title";

const { pen, close } = assets;

const CardPopup = ({ cardInfo }: IViewedCard) => {
    const [isEditDescription, setIsEditDescription] = useState(false);
    const context = useContext(ColumnsContext);

    const findCard = (columns: IColumn[], columnId: number, cardId: number) => {
        const targetColumn = columns.find(
            (column: { id: number }) => column.id === columnId
        );
        if (targetColumn) {
            return targetColumn.cards.find(
                (card: { id: number }) => card.id === cardId
            );
        }
    };

    const deleteCard = () => {
        const columns = [...context.columns];
        if (cardInfo) {
            const targetColumn = columns.find(
                (column: { id: number }) => column.id === cardInfo.columnId
            );
            if (targetColumn) {
                const filtredColumn = targetColumn.cards.filter(
                    (card) => card.id !== cardInfo.cardId
                );
                targetColumn.cards = filtredColumn;
                context.setViewedCard(undefined);
                context.setColumns(columns);
            }
        }
    };

    return (
        <BackdropWrapper>
            {cardInfo && (
                <CardContainer>
                    <CloseButton
                        onClick={() => context.setViewedCard(undefined)}
                    >
                        <img src={close} alt="" />
                    </CloseButton>
                    <Title cardInfo={cardInfo} findCard={findCard} />
                    <Subtitle>
                        Column - {cardInfo.columnName}
                    </Subtitle>
                    <Author>
                        Author - <i>{cardInfo.author}</i>
                    </Author>
                    <Subtitle>
                        <i>Description</i>
                    </Subtitle>
                    <DescriptionContainer>
                        {isEditDescription ? (
                            <EditDescription
                                cardInfo={cardInfo}
                                findCard={findCard}
                                setIsEditDescription={setIsEditDescription}
                            />
                        ) : (
                            <>
                                <Description>
                                    {cardInfo.description
                                        ? cardInfo.description
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
                            {cardInfo.comments?.map((comment) => (
                                <Comment
                                    cardInfo={cardInfo}
                                    findCard={findCard}
                                    key={comment.id}
                                    id={comment.id}
                                    author={comment.author}
                                    content={comment.content}
                                />
                            ))}
                        </CommentsContainer>
                        <CreateComment
                            cardInfo={cardInfo}
                            findCard={findCard}
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
