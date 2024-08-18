import { useState, useRef, useMemo } from "react";

export const useForm = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const emailRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);

    const validateEmail = (email: string): boolean =>
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);

    const validatePassword = (password: string): boolean =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    const isInvalid = useMemo(() => {
        return email === "" || password === "" || !validateEmail(email) || !validatePassword(password);
    }, [email, password]);

    const isInvalidEmail = useMemo(() => {
        return email === "" || !validateEmail(email);
    }, [email]);

    return {
        email,
        setEmail,
        password,
        setPassword,
        emailRef,
        passwordRef,
        validateEmail,
        validatePassword,
        isInvalid,
        isInvalidEmail
    };
}
