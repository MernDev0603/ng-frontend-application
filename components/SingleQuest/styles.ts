import styled from 'styled-components'
import { createGlobalStyle, DefaultTheme } from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const QuestCardWrapper = styled.div`
  max-width: 756px;
  width: 100%;
  padding: 4px;
  border: 1px solid rgba(58, 58, 58, 0.5);
  border-radius: 10px;
  background: ${props => props.theme.colors.lighterBlack};
  cursor: pointer;
`

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${props => props.theme.spacing['4xs']};
  h1 {
    color: #fff;
    font-family: 'Cinzel', serif;
    font-size: 20px;
    font-weight: 700;
    margin: 0;
  }
`
export const QuestCardContent = styled.div`
  padding: 0 20px 10px 15px;
`

export const QuestCardTextWrapper = styled.div`
  display: flex;
`

export const InnerCardContent = styled.div`
  display: flex;
  width: 50%;
  gap: ${props => props.theme.spacing['2xs']};
  h2 {
    color: ${props => props.theme.colors.gold};
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    margin: 10px 0px;
  }
  p {
    color: #fff;
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    margin: 10px 0px;
  }
`

export const DescriptionText = styled.div`
  min-height: 158px;
  p {
    color: ${props => props.theme.colors.grey};
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    margin: 0;
  }
`

export const FooterTitleText = styled.p`
  color: #fff;
  font-family: 'Cinzel';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  text-transform: capitalize;
  margin: 8px 0;
`

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SwordIconWrapper = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing['6xs']};
  margin: 13px 0px;
`