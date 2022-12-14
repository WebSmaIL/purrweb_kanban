import React from "react";
import { ICardNew } from "../../../interfaces/baseInterfaces";
import { ColumnWrapper } from "./style";
import Card from "./Card/Card";
import ColumnTitle from "./ColumnTitle/ColumnTitle";
import AddCard from "./AddCard/AddCard";

interface IProps {
    id: number,
    name: string,
    cards: ICardNew[]
}

const Column = ({ id, name, cards }: IProps): JSX.Element => {
    console.log(`колонка ${id}`)
    return (
        <ColumnWrapper>
            <ColumnTitle id={id} name={name} cards={cards} />

            {cards.map((card): JSX.Element | null =>
                card.columnId === id ? (
                    <Card
                        key={card.id}
                        id={card.id}
                        columnId={id}
                        name={card.name}
                    />
                ) : null
            )}

            <AddCard id={id} name={name}/>
        </ColumnWrapper>
    );
};

export default Column;
