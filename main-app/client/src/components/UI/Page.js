import styled, { css } from 'styled-components'

export const Page = styled.main`
  padding: 20px;
  min-height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  padding-bottom: 100px;
  background-color: ${props => (props.blue ? '#f3f7fc' : 'white')};
`

export const PageContent = styled.section`
  margin: 0 auto;
  max-width: 1180px;
`
