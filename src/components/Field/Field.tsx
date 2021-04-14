import React from 'react'
import {ErrorText, Input, Label} from './style'

interface FieldProps {
    name: string;
    label: string;
    placeholder: string;
    type?: string;
    value: string;
    hasError?: boolean;
    errorText?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Field: React.FC<FieldProps> = ({
    name,
    label,
    type = 'text',
    value,
    onChange,
    placeholder,
    hasError,
    errorText,
    ...props
}) => {
    return (
        <div>
            <Label htmlFor={`id_input_${name}`}>{label}</Label>
            {hasError && <ErrorText>{errorText}</ErrorText>}
            <Input 
                id={`id_input_${name}`} 
                name={name} 
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                {...props}
            />
        </div>
    )
}

export default Field