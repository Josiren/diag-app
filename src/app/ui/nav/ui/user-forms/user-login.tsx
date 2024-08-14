import React from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Checkbox,
} from "@nextui-org/react";
import { MailIcon } from "@icons/header/user-forms/MailIcon";
import { LockIcon } from "@icons/header/user-forms/LockIcon";
import Link from "next/link";
import { Input } from "@nextui-org/input";

export default function UserLogin({ isOpen, onClose }) {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const validateEmail = (value) =>
        value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);

    const validatePassword = (password) =>
        password.match(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        );

    const isInvalid = React.useMemo(() => {
        if (email === "" || password === "") return false;

        return !validateEmail(email) || !validatePassword(password);
    }, [email, password]);


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
                        endContent={<MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                        placeholder="Введите вашу почту"
                        value={email}
                        type="email"
                        label="Email"
                        isInvalid={!validateEmail(email) && email !== ""}
                        errorMessage="Please enter a valid email"
                        onValueChange={setEmail}
                    />
                    <Input
                        endContent={<LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                        label="Password"
                        placeholder="Введите ваш пароль"
                        type="password"
                        value={password}
                        onValueChange={setPassword}
                        isInvalid={!validatePassword(password) && password !== ""}
                        errorMessage="Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one digit, and one special character."
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
                        onPress={onClose}
                        disabled={isInvalid}
                    >
                        Войти
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
