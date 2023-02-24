import styled from 'styled-components'
import { createGlobalStyle, DefaultTheme } from 'styled-components';

export const QuestCardWrapper = styled.div`
  max-width: 332px;
  padding: 6px;
  border: 1px solid rgba(58, 58, 58, 0.5);
  border-radius: 10px;
  background: ${props => props.theme.colors.lighterBlack};
  cursor: pointer;
  h1 {
    color: #fff;
    font-family: 'Cinzel', serif;
    font-size: 14px;
    font-weight: 700;
    padding-left: 6px;
    margin: 0;
  }
`

export const QuestCardContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const InnerCardContent = styled.div`
  display: flex;
  padding: 0 6px 6px 6px;
  gap: ${props => props.theme.spacing['2xs']};
  h2 {
    color: ${props => props.theme.colors.gold};
    font-size: 12px;
    font-weight: 400;
    margin: 5px 3px;
  }
  p {
    color: #fff;
    font-size: 12px;
    font-weight: 400;
    margin: 5px 3px;
  }
`

export const SwordIconWrapper = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing['6xs']};
  margin: 6px 3px;
`