import React from "react";
import { IColumn } from "../../interfaces/baseInterfaces";
import { Container, DeskWrapper, Title } from "./style";
import { useAppSelector } from "../../hooks";
import { columnsSelectors } from "../../redux/ducks/columns";
import Column from "./Column/Column";

const Desk = (): JSX.Element => {
    const columns = useAppSelector(columnsSelectors.getAllColumns);

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
                        />
                    );
                })}
            </DeskWrapper>
        </Container>
    );
};

export default Desk;
