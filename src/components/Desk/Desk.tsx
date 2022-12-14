import React from "react";
import { ICardInfo, IColumnNew } from "../../interfaces/baseInterfaces";
import { Container, DeskWrapper, Title } from "./style";
import { useAppSelector } from "../../hooks";
import { getAllColumns } from "../../redux/ducks/columns";
import ColumnContainer from "./Column/ColumnContainer";

interface IProps {
    setViewedCard: React.Dispatch<React.SetStateAction<ICardInfo | undefined>>;
}

const Desk = ({ setViewedCard }: IProps): JSX.Element => {
    const columns = useAppSelector(getAllColumns);

    return (
        <Container>
            <Title>Your Desk</Title>
            <DeskWrapper>
                {columns.map((element: IColumnNew): JSX.Element => {
                    return (
                        <ColumnContainer
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
