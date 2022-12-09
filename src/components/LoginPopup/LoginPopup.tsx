import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
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

interface IUserName {
    userName: string;
}

const LoginPopup = ({ setName }: IProps) => {
    const { register, handleSubmit } = useForm<IUserName>();
    const onSubmit: SubmitHandler<IUserName> = ({ userName }) => setName(userName);

    return (
        <LoginWrapper> 
            <LoginContainer>
                <Title>Welcome to the KANBAN</Title>
                <LoginForm onSubmit={handleSubmit(onSubmit)}>
                    <InputName
                        {...register("userName", {
                            required: true,
                        })}
                        placeholder="Enter your name..."
                        type="text"
                    />
                    <SubmitButton>OK</SubmitButton>
                </LoginForm>
            </LoginContainer>
        </LoginWrapper>
    );
};

export default LoginPopup;
