import styled, { css } from 'styled-components';
export const Ul = styled.ul`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

export const Next = css`
  font-weight: 500;
  background-color: ${(props) => props.theme.color};
  color: ${(props) => props.theme.backgroundColor};
  padding: 0.5rem;
  border-radius: 0.25rem;
`;

export const Li = styled.li`
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-direction: ${(props) => (props.isRTL ? 'row-reverse' : 'row')};
  ${(props) => (props.className === 'next' ? Next : '')}
`;
