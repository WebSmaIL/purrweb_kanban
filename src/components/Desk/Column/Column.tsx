import React, { useState } from "react";
import { card, column as IProps } from "../../../interfaces/baseInterfaces";
import Styles, {
    AcceptAddCardButton,
    AddCardButton,
    AddCardInput,
    Title
} from "./style";
import pen from "../../../assets/pen.svg";
import plus from "../../../assets/plus.svg";
import accept from "../../../assets/accept.svg";
import Card from "./Card/Card";



const Column = ({ id, name, cards }: IProps): JSX.Element => {
    const [cardsLocal, setCardsLocal] = useState(cards);

    const [renameColumnMode, setRenameColumnMode] = useState(false);
    const [localColumnName, setColumnName] = useState(name);

    const [addCardStatus, setAddCardStatus] = useState(false);
    const [newCardName, setNewCardName] = useState("");

    const onClickRenameButton = () => {
        if (renameColumnMode) {
            let columnsLocal = JSON.parse(
                String(localStorage.getItem("columns"))
            );
            columnsLocal[id - 1].name = localColumnName;
            localStorage.setItem("columns", JSON.stringify(columnsLocal));
        }
        setRenameColumnMode(!renameColumnMode);
    };

    const onAddCard = () => {
        const newCard: card = {
            id: cardsLocal.length ? cardsLocal[cardsLocal.length - 1].id + 1 : 1,
            name: newCardName,
            description: '',
            comments: []
        }
        setNewCardName('');
        setCardsLocal([...cardsLocal, newCard]);
        setAddCardStatus(!addCardStatus);

        let columnsLocal = JSON.parse(String(localStorage.getItem('columns')));
        columnsLocal[id - 1].cards = [...cardsLocal, newCard];

        localStorage.setItem('columns', JSON.stringify(columnsLocal));
    }

    return (
        <Styles.Column>
            <Styles.Container>
                <Title disabled={renameColumnMode}>{localColumnName}</Title>
                <Styles.InputName
                    disabled={!renameColumnMode}
                    value={localColumnName}
                    onChange={(e) => setColumnName(e.target.value)}
                />
                <Styles.RenameButton onClick={onClickRenameButton}>
                    <img src={renameColumnMode ? accept : pen} alt="" />
                </Styles.RenameButton>
            </Styles.Container>
            {cardsLocal &&
                cardsLocal.map(
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
            <AddCardInput
                addCardMode={addCardStatus}
                placeholder="Enter name..."
                value={newCardName}
                onChange={(e) => setNewCardName(e.target.value)}
            />
            <AcceptAddCardButton
                onClick={onAddCard}
                addCardMode={addCardStatus}
            >
                Accept
            </AcceptAddCardButton>
            <AddCardButton
                onClick={() => setAddCardStatus(!addCardStatus)}
                addCardMode={addCardStatus}
            >
                <img src={plus} alt="" />
                <span>Add Card</span>
            </AddCardButton>
        </Styles.Column>
    );
};

export default Column;
