import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    nav {
        background-color: var(--secondary);
    }

    .carousel-item img {
        max-height: 70vh;
      }

    .site-header .nav-link {
        position: relative;
        margin-bottom: 2px;
    }

    .site-header .nav-link:before {
    content: '';
        position: absolute;
        width: 100%;
        max-width: 100px;
        height: 2px;
        left: 0;
        bottom: 0;
        background-color: var(--yellow);
        visibility: hidden;
        transform: scaleX(0);
        transition: all 0.3s ease-out;
    }
    .site-header .nav-link:hover:before {
        visibility: visible;
        left: 0;
        transform: scaleX(1);
}

`;

export default GlobalStyles;
