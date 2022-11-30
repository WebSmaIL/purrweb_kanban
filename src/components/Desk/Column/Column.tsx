import React, { useState } from "react";
import { column as IProps } from "../../../interfaces/baseInterfaces";
import Styles from "./style";
import pen from "../../../assets/pen.svg";
import plus from "../../../assets/plus.svg";
import accept from "../../../assets/accept.svg";
import styled from "styled-components";
import Card from "./Card/Card";
import { columns } from "../../../template";

const Title = styled.h2<{ disabled: boolean }>`
    display: ${(props) => (props.disabled ? "none" : "inline")};
    font-size: 18px;
    font-weight: normal;
    color: #ffffff;
    margin: 0;
`;

const Column = ({ id, name, cards }: IProps): JSX.Element => {
    const [renameMode, setRenameMode] = useState(false);
    const [localName, setName] = useState(name);

    return (
        <Styles.Column>
            <Styles.Container>
                <Title disabled={renameMode}>{localName}</Title>
                <Styles.InputName
                    disabled={!renameMode}
                    value={localName}
                    onChange={(e) => setName(e.target.value)}
                />
                <Styles.RenameButton
                    onClick={() => {
                        columns[id - 1].name = localName;
                        setRenameMode(!renameMode);
                    }}
                >
                    <img src={renameMode ? accept : pen} alt="" />
                </Styles.RenameButton>
            </Styles.Container>
            {cards && cards.map((card): JSX.Element => (
                        <Card
                            key={card.id}
                            id={card.id}
                            name={card.name}
                            description={card.description}
                            comments={card.comments}
                        />
                    ))
            }
            <Styles.AddCardButton>
                <img src={plus} alt="" />
                <span>Add Card</span>
            </Styles.AddCardButton>
        </Styles.Column>
    );
};

export default Column;
