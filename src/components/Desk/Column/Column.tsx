import React from "react";
import { IColumn, IColumn as IProps } from "../../../interfaces/baseInterfaces";
import { ColumnWrapper } from "./style";
import Card from "./Card/Card";
import ColumnTitle from "./ColumnTitle/ColumnTitle";
import AddCard from "./AddCard/AddCard";

const Column = ({ id, name, cards }: IProps): JSX.Element => {
    const findColumn = (columns: IColumn[], id: number) => {
        return columns.find((column: { id: number }) => column.id === id);
    };

    return (
        <ColumnWrapper>
            <ColumnTitle
                findColumn={findColumn}
                columnID={id}
                columnName={name}
            />

            {cards?.map(
                (card): JSX.Element => (
                    <Card
                        key={card.id}
                        id={card.id}
                        columnId={id}
                        name={card.name}
                        description={card.description}
                        comments={card.comments}
                        author={card.author}
                        columnName={name}
                    />
                )
            )}

            <AddCard findColumn={findColumn} columnID={id} />
        </ColumnWrapper>
    );
};

export default Column;
