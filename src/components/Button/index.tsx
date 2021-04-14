import React from 'react';
import { Button, ImgWrapper } from './styles';

export interface Properties {
    backgroundColor?: string;
    type?: 'button' | 'submit' | 'reset';
    color?: string;
    onClick?: () => void;
    disabled?: boolean;
    icon?: string;
    iconAlt?: string;
    invert?: boolean;
    name?: string;
}

const ButtonWrapper: React.FC<Properties> = ({
    children,
    type = 'button',
    backgroundColor = 'purple',
    color = '#ebf2f5',
    icon,
    iconAlt,
    name,
    ...properties
}) => {
    return (
        <Button
            name={name}
            type={type}
            backgroundColor={backgroundColor}
            color={color}
            {...properties}
        >
            {icon ? (
                <ImgWrapper>
                    <img src={icon} alt={iconAlt} />
                </ImgWrapper>
            ) : undefined}
            {children}
        </Button>
    );
};
export { ButtonWrapper as Button };
