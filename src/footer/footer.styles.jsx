import styled from 'styled-components';
import { MDBFooter } from 'mdbreact';

export const FooterContainer = styled(MDBFooter)`
  background: #2176A7;

  .container {
 
    padding-top: 1rem;
    padding-bottom: 2rem;

    .title {
      padding: 0rem 1rem;

      font-family: Poppins;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
      color: rgba(0, 0, 0, 0.5);
    }

    ul {
      padding: 0;

      li {
        a {
          font-family: Roboto;
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 21px;

          color: rgba(0, 0, 0, 0.5);
        }
      }
    }
    .footer-copyright {
      height: 86px;
      background: rgba(0, 0, 0, 0.15);
    }
    

  }
`;