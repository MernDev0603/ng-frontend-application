import styled from 'styled-components'

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const InnerContainer = styled.div`
  max-width: 1044px;
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.s};
`