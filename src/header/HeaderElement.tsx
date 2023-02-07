import { FC } from "react";
import styled from "styled-components";

type Props = {
  children: JSX.Element | JSX.Element[];
  bgColor: string;
};

const HeaderElement: FC<Props> = ({ children, bgColor }) => {
  const Element = styled.div`
    width: 30%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    background-color: ${bgColor};
    border-radius: 5px;
  `;

  return <Element>{children}</Element>;
};

export default HeaderElement;
