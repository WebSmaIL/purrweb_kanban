import React, { useState } from "react";
import { ICard, IColumn as IProps } from "../../../interfaces/baseInterfaces";
import {
    AddCardButton,
    Title,
    ColumnWrapper,
    Container,
    InputName,
    RenameButton,
} from "./style";
import assets from "../../../assets";
import Card from "./Card/Card";
import AddCard from "./AddCard/AddCard";

const { pen, plus, accept } = assets;

const Column = ({ id, name, cards }: IProps): JSX.Element => {
    const [cardsLocal, setCardsLocal] = useState(cards);

    const [isRenamed, setIsRenamed] = useState(false);
    const [nameValue, setNameValue] = useState(name);

    const [isVisible, setIsVisible] = useState(false);
    const [newCardName, setNewCardName] = useState("");

    const onRenameButton = () => {
        if (isRenamed) {
            let columnsLocal = JSON.parse(
                String(localStorage.getItem("columns"))
            );
            columnsLocal[id - 1].name = nameValue;
            localStorage.setItem("columns", JSON.stringify(columnsLocal));
        }
        setIsRenamed(!isRenamed);
    };

    const onAddCard = () => {
        const newCard: ICard = {
            id: Number(Date.now()),
            name: newCardName,
            description: "",
            comments: [],
        };
        setNewCardName("");
        setCardsLocal([...cardsLocal, newCard]);
        setIsVisible(!isVisible);

        let columnsLocal = JSON.parse(String(localStorage.getItem("columns")));
        columnsLocal.find((column: { id: number }) => column.id === id).cards =
            [...cardsLocal, newCard];

        localStorage.setItem("columns", JSON.stringify(columnsLocal));
    };

    return (
        <ColumnWrapper>
            <Container>
                <Title disabled={isRenamed}>{nameValue}</Title>
                <InputName
                    disabled={!isRenamed}
                    value={nameValue}
                    onChange={(e) => setNameValue(e.target.value)}
                />
                <RenameButton onClick={onRenameButton}>
                    <img src={isRenamed ? accept : pen} alt="" />
                </RenameButton>
            </Container>
            {cardsLocal?.map(
                (card): JSX.Element => (
                    <Card
                        key={card.id}
                        id={card.id}
                        name={card.name}
                        description={card.description}
                        comments={card.comments}
                    />
                )
            )}

            {isVisible ? (
                <AddCard
                    value={newCardName}
                    isVisible={isVisible}
                    setNewCardName={setNewCardName}
                    onAddCard={onAddCard}
                />
            ) : (
                <AddCardButton
                    onClick={() => setIsVisible(!isVisible)}
                    addCardMode={isVisible}
                >
                    <img src={plus} alt="" />
                    <span>Add Card</span>
                </AddCardButton>
            )}
        </ColumnWrapper>
    );
};

export default Column;
