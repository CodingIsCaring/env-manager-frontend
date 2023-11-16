import { FC } from 'react';
import styled from '@emotion/styled';

const ButtonStyle = styled.button`
  background-color: #4CAF50;
  width: 400px;
  height: 200px;
  font-size: 50px;
`;

interface Props {
  title: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

export const Button: FC<Props> = ({
  title,
  type = 'submit',
  onClick
}) =>
  <ButtonStyle type={type} onClick={onClick}>
    {title}
  </ButtonStyle>;