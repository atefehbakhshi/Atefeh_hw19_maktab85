import { FC } from "react";
import styled from "styled-components";

const Btn = styled.button`
  padding: 0.5rem 0.75rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 0.75rem;
  cursor: pointer;
`;

type Props = {
  children: string;
  onClick?: () => void;
};

const Button: FC<Props> = ({ children, onClick }) => {
  return <Btn onClick={onClick}>{children}</Btn>;
};

export default Button;
