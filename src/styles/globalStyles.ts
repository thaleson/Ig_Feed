import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background-color: #121212;
    --text-color: #ffffff;
    --primary-color: #1DB954;
    --secondary-color: #535353;
    --border-color: #282828;
    --font-family: 'Arial', sans-serif;
    --font-size: 16px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--background-color);
    color: var(--text-color);
    font-family: var(--font-family);
    font-size: var(--font-size);
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--primary-color);
  }

  a {
    color: var(--primary-color);
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    .container {
      width: 95%;
    }
  }
`;

export const AppContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 20px;
  height: calc(100vh - 60px); /* Ajusta a altura para considerar o cabeçalho */
  margin-top: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
