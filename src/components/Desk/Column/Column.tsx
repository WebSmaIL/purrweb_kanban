import React, { useContext, useState } from "react";
import { ICard, IColumn as IProps } from "../../../interfaces/baseInterfaces";
import {
    AddCardButton,
    Title,
    ColumnWrapper,
    Container,
    InputName,
    RenameButton,
    AcceptButton,
} from "./style";
import assets from "../../../assets";
import Card from "./Card/Card";
import AddCard from "./AddCard/AddCard";
import { Context } from "../../../App";

const { pen, plus, accept } = assets;

const Column = ({ id, name, cards }: IProps): JSX.Element => {
    const contextColumns = useContext(Context);
    const columns = [...contextColumns.columns];
    const targetColumn = columns.find((column: { id: number }) => column.id === id)

    const [isRename, setIsRenamed] = useState(false);
    const [titleValue, setTitleValue] = useState(name);

    const [isVisible, setIsVisible] = useState(false);
    const [newCardName, setNewCardName] = useState("");

    const acceptRenamed = () => {
        if (targetColumn) {
            targetColumn.name = titleValue;
        }
        contextColumns.setColumns(columns);

        setIsRenamed(!isRename);
    };

    const acceptAddCard = () => {
        const card: ICard = {
            id: Number(Date.now()),
            name: newCardName,
            description: "",
            comments: [],
        };
        if (targetColumn) {
            targetColumn.cards.push(card);
        }
        contextColumns.setColumns(columns);

        setNewCardName("");
        setIsVisible(!isVisible);
    };

    return (
        <ColumnWrapper>
            {isRename ? (
                <Container>
                    <InputName
                        value={titleValue}
                        onChange={(e) => setTitleValue(e.target.value)}
                    />
                    <AcceptButton onClick={acceptRenamed}>
                        <img src={accept} alt="" />
                    </AcceptButton>
                </Container>
            ) : (
                <Container>
                    <Title disabled={isRename}>{titleValue}</Title>
                    <RenameButton onClick={() => setIsRenamed(!isRename)}>
                        <img src={pen} alt="" />
                    </RenameButton>
                </Container>
            )}

            {cards?.map(
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
                    onAddCard={acceptAddCard}
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
