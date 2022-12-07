import React from "react";
import { IColumn } from "../../../interfaces/baseInterfaces";
import { ColumnWrapper } from "./style";
import Card from "./Card/Card";
import ColumnTitle from "./ColumnTitle/ColumnTitle";
import AddCard from "./AddCard/AddCard";

const Column = ({ id, name, cards }: IColumn): JSX.Element => {
    return (
        <ColumnWrapper>
            <ColumnTitle id={id} name={name} cards={cards} />

            {cards?.map(
                (card): JSX.Element => (
                    <Card
                        key={card.id}
                        id={card.id}
                        columnId={id}
                        name={card.name}
                        comments={card.comments}
                    />
                )
            )}

            <AddCard id={id} name={name} cards={cards} />
        </ColumnWrapper>
    );
};

export default Column;
