import * as styled from 'styled-components';

export default styled.createGlobalStyle`
  :root {
    --color-teal-0: #e6fcf5;
    --color-teal-1: #c3fae8;
    --color-teal-2: #96f2d7;
    --color-teal-3: #63e6be;
    --color-teal-4: #38d9a9;
    --color-teal-5: #20c997;
    --color-teal-6: #12b886;
    --color-teal-7: #0ca678;
    --color-teal-8: #099268;
    --color-teal-9: #087f5b;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    /* để cho định dạng rem dễ tính hơn */
    font-size: 62.5%;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    min-height: 100vh;
    /* để về mặc định 16px và 1.5 line-height */
    line-height: 1.5;
    font-size: 1.6rem;
    max-width: 100vw;
    overflow-x: hidden;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
    color: inherit;
  }

  button {
    cursor: pointer;
  }

  *:disabled {
    cursor: not-allowed;
  }

  button:has(svg) {
    line-height: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
    hyphens: auto;
  }

  img {
    max-width: 100%;
  }
`;
