import React, { useState } from "react";
import { Button, ModalBody, ModalFooter } from "@nextui-org/react";
import { MailIcon } from "@icons/header/user-forms/MailIcon";
import { LockIcon } from "@icons/header/user-forms/LockIcon";
import { Input } from "@nextui-org/input";
import FormsLayout from "@/app/ui/nav/ui/user-forms/layout";
import { useForm } from "@/app/lib/utils/user-forms/form";
import UserLogin from "@/app/ui/nav/ui/user-forms/ui/login/user-login";

interface UserRegisterProps {
    isOpen: boolean;
    onClose: () => void;
}

const UserRegister: React.FC<UserRegisterProps> = ({ isOpen, onClose }) => {
    const {
        email,
        setEmail,
        password,
        setPassword,
        emailRef,
        passwordRef,
        validateEmail,
        validatePassword,
        isInvalid,
    } = useForm();

    const [isLoginOpen, setLoginOpen] = useState(false);

    const handleOpenLogin = () => {
        setLoginOpen(true);
        onClose();
    };

    const handleCloseLogin = () => {
        setLoginOpen(false);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, nextField?: React.RefObject<HTMLInputElement>) => {
        if (event.key === "Enter") {
            event.preventDefault();
            nextField ? nextField.current?.focus() : handleSubmit();
        }
    };

    const handleSubmit = () => {
        if (isInvalid) {
            console.log("Пожалуйста, заполните все поля корректно.");
            return;
        }
        console.log("Регистрация с:", { email, password });
        onClose();
    };

    return (
        <>
            <FormsLayout title="Регистрация" isOpen={isOpen} onClose={onClose}>
                <ModalBody>
                    <Input
                        autoFocus
                        ref={emailRef}
                        endContent={<MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                        placeholder="Введите вашу почту"
                        type="email"
                        label="Email"
                        value={email}
                        errorMessage={
                            <span className="mt-[4px]">
                                Пожалуйста, введите действительный адрес электронной почты
                            </span>
                        }
                        isInvalid={!validateEmail(email) && email !== ""}
                        onValueChange={setEmail}
                        onKeyDown={(event) => handleKeyDown(event, passwordRef)}
                    />

                    <Input
                        ref={passwordRef}
                        endContent={<LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                        label="Password"
                        placeholder="Введите ваш пароль"
                        type="password"
                        value={password}
                        errorMessage={
                            <span className="mt-[4px]">
                                Пароль должен состоять не менее чем из 8 символов и содержать как минимум одну строчную букву, одну заглавную букву, одну цифру и один специальный символ.
                            </span>
                        }
                        isInvalid={!validatePassword(password) && password !== ""}
                        onValueChange={setPassword}
                        onKeyDown={(event) => handleKeyDown(event)}
                    />
                    <Button
                        className="text-[14px] ml-[5px]"
                        variant="flat"
                        onPress={handleOpenLogin}
                    >
                        У вас уже есть аккаунт?
                    </Button>
                </ModalBody>
                <ModalFooter>
                    <Button
                        onPress={onClose}
                        className="rounded-[10px] border-[1px] border-[#102B4E] bg-white"
                    >
                        Закрыть
                    </Button>
                    <Button
                        onPress={handleSubmit}
                        className="rounded-[10px] bg-[#1F2937] text-white"
                    >
                        Зарегистрироваться
                    </Button>
                </ModalFooter>
            </FormsLayout>

            <UserLogin
                isOpen={isLoginOpen}
                onClose={handleCloseLogin}
            />
        </>
    );
};

export default UserRegister;
