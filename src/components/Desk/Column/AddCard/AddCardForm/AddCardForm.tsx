import React from "react";
import { AcceptAddCardButton, AddCardInput } from './style'

interface IProps {
    isVisible: boolean,
    value: string,
    setNewCardName: React.Dispatch<React.SetStateAction<string>>,
    onAddCard: ()=>void
}

const AddCardForm = ({isVisible, value, setNewCardName, onAddCard}: IProps) => {
    return (
        <div>
            <AddCardInput
                isVisible={isVisible}
                placeholder="Enter name..."
                value={value}
                onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setNewCardName(e.target.value)}
            />
            <AcceptAddCardButton onClick={() => onAddCard()} isVisible={isVisible}>
                Accept
            </AcceptAddCardButton>
        </div>
    );
};

export default AddCardForm;
