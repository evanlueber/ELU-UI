import React, { InputHTMLAttributes } from "react";
export interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
    value: string;
    onChange: (e: any) => void;
    placeholder: string;
    custom?: string;
    customFont?: string;
}
export declare const PasswordInput: React.FC<PasswordInputProps>;
