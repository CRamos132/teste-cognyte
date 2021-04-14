import React from 'react'
import {Input, Label} from './style'

interface FieldProps {
    name: string;
    label: string;
    placeholder: string;
    type?: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Field: React.FC<FieldProps> = ({
    name,
    label,
    type = 'text',
    value,
    onChange,
    onBlur,
    placeholder,
    ...props
}) => {
    return (
        <div>
            <Label htmlFor={`id_input_${name}`}>{label}</Label>
            <Input 
                id={`id_input_${name}`} 
                name={name} 
                placeholder={placeholder}
                value={value}
                {...props}
            />
        </div>
    )
}

export default Field