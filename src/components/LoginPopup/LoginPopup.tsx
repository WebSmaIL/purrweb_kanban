import React, { useState } from "react";
import {
    LoginWrapper,
    LoginContainer,
    Title,
    InputName,
    LoginForm,
    SubmitButton,
} from "./style";

interface IProps {
    setName: React.Dispatch<any>;
}

const LoginPopup = ({ setName }: IProps) => {
    const [inputText, setInputText] = useState("");

    return (
        <LoginWrapper>
            <LoginContainer>
                <Title>Welcome to the KANBAN</Title>
                <LoginForm>
                    <InputName
                        placeholder="Enter your name..."
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                    />
                    <SubmitButton
                        onClick={(e) => {
                            e.preventDefault();
                            setName(inputText);
                        }}
                    >
                        OK
                    </SubmitButton>
                </LoginForm>
            </LoginContainer>
        </LoginWrapper>
    );
};

export default LoginPopup;
