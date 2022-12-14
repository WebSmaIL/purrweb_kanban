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
import { ICardNew, ICommentNew } from "../../interfaces/baseInterfaces";
import EditDescription from "./EditDescription/EditDescription";
import CreateComment from "./CreateComment/CreateComment";
import Title from "./Title/Title";
import { ViewedContext } from "../../App";

interface IProps {
    comments: ICommentNew[];
    currentCard: ICardNew | undefined;
    columnName: string | undefined;
    onDeleteCard: (cardId: number) => void;
}

const CardPopup = ({ currentCard, comments, onDeleteCard, columnName }: IProps) => {
    const { setViewedCard } = useContext(ViewedContext);
    const [isEditDescription, setIsEditDescription] = useState(false);

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
                            onDeleteCard(currentCard.id);
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
