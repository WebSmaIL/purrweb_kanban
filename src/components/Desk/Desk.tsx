import React from "react";
import Column from "./Column/Column";
import { IColumn } from "../../interfaces/baseInterfaces";
import { Container, DeskWrapper, Title } from "./style";
import { useAppSelector } from "../../hooks";

const Desk = (): JSX.Element => {
    const columns = useAppSelector(state => state.columns.columns);

    return (
        <Container>
            <Title>Your Desk</Title>
            <DeskWrapper>
                {columns.map((element: IColumn): JSX.Element => {
                    return (
                        <Column
                            key={element.id}
                            id={element.id}
                            name={element.name}
                            cards={element.cards}
                        />
                    );
                })}
            </DeskWrapper>
        </Container>
    );
};

export default Desk;
