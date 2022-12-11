import React from "react";
import { useAppDispatch } from "../../hooks";
import { setUserName } from "../../redux/ducks/user/reducers";
import { useForm, SubmitHandler } from "react-hook-form";
import {
    LoginWrapper,
    LoginContainer,
    Title,
    InputName,
    LoginForm,
    SubmitButton,
} from "./style";

interface IUserName {
    userName: string;
}

const LoginPopup = () => {
    const dispatch = useAppDispatch();

    const { register, handleSubmit } = useForm<IUserName>();

    const onSubmit: SubmitHandler<IUserName> = ({ userName }) =>
        dispatch(setUserName(userName));

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
