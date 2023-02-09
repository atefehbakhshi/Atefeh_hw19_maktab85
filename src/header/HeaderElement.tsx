import { FC } from "react";
import styled from "@emotion/styled";

type Props = {
  children: JSX.Element | JSX.Element[];
  bgColor: string;
};

const Element = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background-color: ${(props) => props.bgColor};
  border-radius: 5px;
`;

const HeaderElement: FC<Props> = ({ children, bgColor }) => {
  return <Element bgColor={bgColor}>{children}</Element>;
};

export default HeaderElement;
