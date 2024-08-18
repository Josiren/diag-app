import { MailIcon } from "@icons/header/user-forms/MailIcon";
import { Input } from "@nextui-org/input";
import React from "react";
import { useForm } from "@/app/lib/utils/user-forms/form";
import FormsLayout from "@/app/ui/nav/ui/user-forms/layout";
import { Button, ModalBody, ModalFooter } from "@nextui-org/react";

interface UserForgotProps {
    isOpen: boolean;
    onClose: () => void;
}

const UserForgot: React.FC<UserForgotProps> = ({ isOpen, onClose }) => {
    const {
        email,
        setEmail,
        emailRef,
        validateEmail,
        isInvalid
    } = useForm();

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            event.preventDefault();
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        if (isInvalid) {
            console.log("Пожалуйста, заполните все поля корректно.");
            return;
        }

        console.log("Восстановление с:", { email });
        onClose();
    };

    return (
        <FormsLayout
            title="Восстановление"
            isOpen={isOpen}
            onClose={onClose}
        >
            <ModalBody>
                <Input
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
                    onKeyDown={handleKeyDown}
                />
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
                    Восстановить
                </Button>
            </ModalFooter>
        </FormsLayout>
    );
}

export default UserForgot;
