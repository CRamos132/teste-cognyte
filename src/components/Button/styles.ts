import styled from 'styled-components';
import { Properties } from '.';

const Button = styled.button<Properties>`
    background-color: ${properties =>
        properties.invert ? properties.color : properties.backgroundColor};
    color: ${properties =>
        properties.invert ? properties.backgroundColor : properties.color};
    padding: 8px 16px;
    border: 1px solid ${properties => properties.backgroundColor};
    border-radius: 24px;
    min-width: 100px;
    transition: 0.3s;
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    cursor: pointer;
    svg {
        height: 12px;
        margin-left: 5px;
    }
    &:hover:not(:disabled) {
        color: ${properties =>
            properties.invert ? properties.color : properties.backgroundColor};
        background-color: ${properties =>
            properties.invert ? properties.backgroundColor : properties.color};
        path {
            fill: ${properties =>
                properties.invert
                    ? properties.color
                    : properties.backgroundColor};
        }
    }
    &:disabled {
        opacity: 0.7;
        background-color: #c9c9c8;
        color: #747474;
        border: 1px solid #c9c9c8;
        cursor: not-allowed;
    }
`;

const ImgWrapper = styled.div`
    width: 100%;
    text-align: center;
`;

export { Button, ImgWrapper };
