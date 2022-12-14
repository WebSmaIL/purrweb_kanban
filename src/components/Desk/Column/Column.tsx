import React from "react";
import { ColumnWrapper } from "./style";
import Card from "./Card/Card";
import ColumnTitle from "./ColumnTitle/ColumnTitle";
import AddCard from "./AddCard/AddCard";
import { useAppSelector } from "../../../hooks";
import { getCardsByColumnId } from "../../../redux/ducks/cards";

interface IProps {
    id: number;
    name: string;
}

const Column = ({ id, name }: IProps): JSX.Element => {
    const cards = useAppSelector(getCardsByColumnId(id));

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

            <AddCard id={id} name={name} />
        </ColumnWrapper>
    );
};

export default Column;
