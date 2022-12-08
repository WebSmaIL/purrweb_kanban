import React, { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { StateContext } from "../../../../api/ContextAPI";
import { accept, pen } from "../../../../assets";
import {
    Container,
    InputName,
    RenameButton,
    Title,
    AcceptButton,
    ChangeTitleForm,
} from "./style";
import { replaceColumn } from "../../../../helpers/helpers";
import { IColumn } from "../../../../interfaces/baseInterfaces";

interface IShippingField {
    columnTitle: string;
}

const ColumnTitle = ({ id, name, cards }: IColumn) => {
    const context = useContext(StateContext);

    const [isRenameColumn, setIsRenameColumn] = useState(false);

    const { register, handleSubmit } = useForm<IShippingField>();

    const onSubmit: SubmitHandler<IShippingField> = ({ columnTitle }) => {
        const column = { id, name: columnTitle, cards };
        const updatedColumns = replaceColumn(context.columns, id, column);
        context.setColumns(updatedColumns);
        setIsRenameColumn(!isRenameColumn);
    };

    return (
        <>
            {isRenameColumn ? (
                <Container>
                    <ChangeTitleForm onSubmit={handleSubmit(onSubmit)}>
                        <InputName
                            {...register("columnTitle", {
                                required: true,
                                value: name,
                            })}
                        />
                        <AcceptButton>
                            <img src={accept} alt="" />
                        </AcceptButton>
                    </ChangeTitleForm>
                </Container>
            ) : (
                <Container>
                    <Title disabled={isRenameColumn}>{name}</Title>
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
