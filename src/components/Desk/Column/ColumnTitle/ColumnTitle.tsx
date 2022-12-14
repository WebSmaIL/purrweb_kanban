import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { accept, pen } from "../../../../assets";
import {
    Container,
    InputName,
    RenameButton,
    Title,
    AcceptButton,
    TitleChangeForm,
} from "./style";
import { updateColumns } from "../../../../redux/ducks/columns/slice";  
import { ICardNew } from "../../../../interfaces/baseInterfaces";
import { useAppDispatch } from "../../../../hooks";

interface IShippingField {
    columnTitle: string;
}

interface IProps {
    id: number,
    name: string,
    cards: ICardNew[]
}

const ColumnTitle = ({ id, name, cards }: IProps) => {
    const dispatch = useAppDispatch();

    const [isRenameColumn, setIsRenameColumn] = useState(false);

    const { register, handleSubmit } = useForm<IShippingField>();

    const onSubmit: SubmitHandler<IShippingField> = ({ columnTitle }) => {
        dispatch(updateColumns({id, name: columnTitle }));
        setIsRenameColumn(!isRenameColumn);
    };

    return (
        <>
            {isRenameColumn ? (
                <Container>
                    <TitleChangeForm onSubmit={handleSubmit(onSubmit)}>
                        <InputName
                            {...register("columnTitle", {
                                required: true,
                                value: name,
                            })}
                        />
                        <AcceptButton>
                            <img src={accept} alt="" />
                        </AcceptButton>
                    </TitleChangeForm>
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
