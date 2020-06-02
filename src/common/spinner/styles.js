import styled, { keyframes } from "styled-components";
export const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  width: 64px;
  height: 64px;
  &:after {
    content: "";
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid #fff;
    border-color: ${(props) =>
      `${props.theme.color} transparent ${props.theme.color} transparent`};
    animation: ${spin} 1.2s linear infinite;
  }
`;

export const Wrapper = styled.div`
  background-color: red;
  height: 100%;
`;
