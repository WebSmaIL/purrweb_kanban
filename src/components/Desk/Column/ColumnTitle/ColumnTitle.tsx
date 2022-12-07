import React, { useContext, useState } from "react";
import { accept, pen } from "../../../../assets";
import { StateContext } from "../../../../api/ContextAPI";
import {
    Container,
    InputName,
    RenameButton,
    Title,
    AcceptButton,
} from "./style";
import { replaceColumn } from "../../../../helpers/helpers";
import { IColumn } from "../../../../interfaces/baseInterfaces";

const ColumnTitle = ({ id, name, cards }: IColumn) => {
    const context = useContext(StateContext);

    const [isRenameColumn, setIsRenameColumn] = useState(false);
    const [titleValue, setTitleValue] = useState(name);

    const renameColumn = () => {
        const column = { id, name: titleValue, cards };
        const updatedColumns = replaceColumn(context.columns, id, column);
        context.setColumns(updatedColumns);
        setIsRenameColumn(!isRenameColumn);
    };

    return (
        <>
            {isRenameColumn ? (
                <Container>
                    <InputName
                        value={titleValue}
                        onChange={(e) => setTitleValue(e.target.value)}
                    />
                    <AcceptButton onClick={renameColumn}>
                        <img src={accept} alt="" />
                    </AcceptButton>
                </Container>
            ) : (
                <Container>
                    <Title disabled={isRenameColumn}>{titleValue}</Title>
                    <RenameButton
                        onClick={() => {
                            setIsRenameColumn(!isRenameColumn);
                        }}
                    >
                        <img src={pen} alt="" />
                    </RenameButton>
                </Container>
            )}
        </>
    );
};

export default ColumnTitle;
