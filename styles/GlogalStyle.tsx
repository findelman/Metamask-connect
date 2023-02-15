import { createGlobalStyle } from "styled-components";

export const GlogalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  outline: none;
  border: unset;
}

p {
  font-weight: 400;
font-size: 16px;
line-height: 120%;
font-family: 'Avenir-Next-Cyr-Medium', sans-serif;
}

h2 {
  font-family: var(--ff-BebasN);
    font-weight: 700;
    font-size: 36px;
    line-height: 120%;
}
:root {
  --ff-BebasN: 'Bebas Neue';
  --color-orange: #E75626;
}

`;
