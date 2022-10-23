import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
  }
`

export const ContainerStyle = styled.div`
    width: 100vw;
    height: 100%;
    background-color: #f3fafd;
    display: flex;
    flex-direction: column;
    height: calc(var(--vh, 1vh) * 100);
`;