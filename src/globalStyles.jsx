import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
    nav {
        background-color: var(--teal);
        position: fixed !important;
        z-index: 10001;
        width: 100%;
        margin-bottom: 5rem;
    }
`;

export default GlobalStyles;