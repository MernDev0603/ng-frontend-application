import styled, { css } from 'styled-components'

export const Button = styled.button`
  color: #FFF;
  font-family: 'Cinzel';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  background: ${props => props.theme.colors.lighterBlack};
  border: 0.6px solid #BEA77E;
  border-radius: 2.5px;
  cursor: pointer;
  padding: 9px 20px;
`
