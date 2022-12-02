import React, { useContext, useState } from "react";
import assets from "../../../../assets";
import { ColumnsContext } from "../../../../api/ContextAPI";
import { IColumn } from "../../../../interfaces/baseInterfaces";
import {Container, InputName, RenameButton, Title, AcceptButton} from './style'

interface IProps {
    findColumn: (columns: IColumn[], id: number)=> IColumn | undefined,
    columnID: number,
    columnName: string
}

const { accept, pen } = assets;

const ColumnTitle = ({findColumn, columnID, columnName}: IProps) => {
    const contextColumns = useContext(ColumnsContext);
    const columns = [...contextColumns.columns];    

    const [isRenameColumn, setIsRenameColumn] = useState(false);
    const [titleValue, setTitleValue] = useState(columnName);

    const renameColumn = () => {
        const targetColumn = findColumn(columns, columnID);
        if (targetColumn && targetColumn.name !== titleValue) {
                targetColumn.name = titleValue;
                contextColumns.setColumns(columns);
        }
        setIsRenameColumn(!isRenameColumn);
    };

  return (
    <>
        {
            isRenameColumn ? (
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
  )
}

export default ColumnTitle