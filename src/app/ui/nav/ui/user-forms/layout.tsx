import { Modal, ModalContent, ModalHeader } from "@nextui-org/react";
import React from "react";

interface FormsLayoutProps {
    title?: string;
    isOpen: boolean;
    onClose: () => void;
    motionProps?: any;
    classNames?: { [key: string]: string };
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "full";
    children?: React.ReactNode;
}

export default function FormsLayout({
        isOpen,
        onClose,
        title,
        motionProps,
        classNames,
        size,
        children,
    }: FormsLayoutProps) {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            motionProps={motionProps}
            size={size}
            classNames={{
                backdrop: "bg-black/50 backdrop-opacity-40",
                ...(classNames || {}),
            }}
        >
            <ModalContent>
                <ModalHeader className="flex flex-col gap-1">
                    {title}
                </ModalHeader>
                {children}
            </ModalContent>
        </Modal>
    );
}
