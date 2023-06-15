import { darken } from 'polished';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /*=== CSS Variables ===*/
  :root {
    --font-family: "Poppins", sans-serif;

    --z-tooltip: 10;
    --z-fixed: 100;
    --z-modal: 1000;
  }

  /*=== Base ===*/
  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body,
  button,
  input,
  textarea {
    font-family: var(--font-family);
    font-size: ${({theme}) => theme.text.size.normal};
  }

  body {
    background-color: ${({theme}) => theme.colors.bodyBg};
    color: ${({theme}) => theme.colors.text};
  }

  h1 {
    color: ${({theme}) => theme.colors.title};
    font-weight: ${({theme}) => theme.text.weight.medium};
  }

  h2, h3 {
    color: ${({theme}) => theme.colors.title};
    font-weight: ${({theme}) => theme.text.weight.middle};
  }

  ul {
    list-style: none;
  }

  a {
    color: ${({theme}) => theme.colors.text};
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  /*=== Utility CSS Classes ===*/
  .section {
    padding: 6rem 0 2rem;
  }

  .section-title {
    font-size: ${({theme}) => theme.text.size.title};
    color: ${({theme}) => theme.colors.title};
  }

  .section-subtitle {
    display: block;
    font-size: ${({theme}) => theme.text.size.small};
    margin-bottom: 4rem;
  }

  .section-title,
  .section-subtitle {
    text-align: center;
  }

  /*=== Layout ===*/
  .container {
    max-width: 968px;
    margin-left: auto;
    margin-right: auto;
  }

  .grid {
    display: grid;
    gap: 1.5rem;
  }

  /*=== Breakpoints ===*/
  /* For large devices */
  @media screen and (max-width: 992px) {
    .container {
      margin-left: 1.5rem;
      margin-right: 1.5rem;
    }

    .button {
      padding: 1rem 1.75rem;
    }
  }

  /* For medium devices */
  @media screen and (max-width: 768px) {
    .section {
      padding: 2rem 0 4rem;
    }
  }

  @media screen and (max-width: 576px) {
  }

  /* For small devices */
  @media screen and (max-width: 350px) {
    .container {
      margin-left: 1rem;
      margin-right: 1rem;
    }
  }
`;
