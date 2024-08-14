import React, { useRef } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Checkbox } from "@nextui-org/react";
import { MailIcon } from "@icons/header/user-forms/MailIcon";
import { LockIcon } from "@icons/header/user-forms/LockIcon";
import Link from "next/link";
import { Input } from "@nextui-org/input";

export default function UserLogin({ isOpen, onClose }) {
    // State for email and password
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const validateEmail = (value) =>
        value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);

    const validatePassword = (password) =>
        password.match(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        );

    const isInvalid = React.useMemo(() => {
        if (email === "" || password === "") return true;
        return !validateEmail(email) || !validatePassword(password);
    }, [email, password]);

    const handleKeyDown = (event, nextField) => {
        if (event.key === "Enter") {
            event.preventDefault();
            if (nextField) {
                nextField.current.focus();
            } else {
                handleSubmit();
            }
        }
    };


    // Handle form submission
    const handleSubmit = () => {
        if (email === "" || password === "") {
            console.log("Please fill in all fields.");
            return;
        }

        if (!isInvalid) {
            console.log("Logging in with:", { email, password });
            onClose();
        }

    };

    return (
        <Modal
            isOpen={isOpen}
            onOpenChange={onClose}
            classNames={{
                backdrop: "bg-black/50 backdrop-opacity-40",
            }}
        >
            <ModalContent>
                <ModalHeader className="flex flex-col gap-1">Вход</ModalHeader>
                <ModalBody>
                    <Input
                        autoFocus
                        ref={emailRef}
                        endContent={<MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                        placeholder="Введите вашу почту"
                        value={email}
                        type="email"
                        label="Email"
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

                    <div className="flex py-2 px-1 justify-between">
                        <Checkbox classNames={{ label: "text-small" }}>
                            Запомнить меня
                        </Checkbox>
                        <Link href="#" className="text-[14px]">
                            Забыли пароль?
                        </Link>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button
                        className="rounded-[10px] border-[1px] border-[#102B4E] bg-white"
                        variant="flat"
                        onPress={onClose}
                    >
                        Закрыть
                    </Button>
                    <Button
                        className="rounded-[10px] bg-[#1F2937] text-white"
                        variant="flat"
                        onPress={handleSubmit}
                        disabled={isInvalid}
                    >
                        Войти
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
