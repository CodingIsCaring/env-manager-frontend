'use client';
import {FC} from "react";
import styled from '@emotion/styled';

const ButtonStyle = styled.button`
    background-color: #4CAF50;
    width: 80px;
    height: 40px;
`;

export const Button: FC = () => {
    const handleClick = () => console.log('The link was clicked.');
    return <ButtonStyle onClick={handleClick}>
        Click me
    </ButtonStyle>;
};