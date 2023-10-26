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
  onClick: () => void;
}

export const Button: FC<Props> = ({ title, onClick }) =>
  <ButtonStyle onClick={onClick}>
    {title}
  </ButtonStyle>;