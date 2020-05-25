import styled, { css } from "styled-components";
export const Ul = styled.ul`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: space-between;
`;

export const Name = styled.div`
  text-transform: capitalize;
`;
export const Difference = styled.div`
  color: ${(props) => props.theme.differenceColor};
`;
export const Time = styled.div``;

export const Next = css`
  font-weight: 500;
  background-color: ${(props) => props.theme.color};
  color: ${(props) => props.theme.backgroundColor};
  padding: 0.5rem;
  border-radius: 2px;
`;

export const Li = styled.li`
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-direction: ${(props) =>
    props.lang === "fr-fr" ? "row" : "row-reverse"};
  ${(props) => (props.className === "next" ? Next : "")}
`;
