import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  margin: 0.5rem 0;
`;

const StyledH = css`
  text-align: center;
  padding: 0.5rem;
`;

export const H2 = styled.h2`
  ${StyledH}
  text-transform: capitalize;
`;
export const H3 = styled.h3`
  ${StyledH}
`;
