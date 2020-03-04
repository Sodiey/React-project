import styled, { css } from "styled-components";
import { MDBContainer, MDBCol } from "mdbreact";

//GLobal
const colors = {
  gray: "rgb(242, 246, 249)"
}

export const Title = styled.h2`
  color: rgb(65, 71, 84);
  font-size: 2.4em;
  font-weight: bold;
  font-family: Poppins, sans-serif;

  ${props => props.col && css`
  color: var(--cyan);
  `}
`;

export const Text = styled.p`
  color: rgb(102, 102, 102);
  font-size: 1.2em;
  font-weight: 400;
  line-height: 1.625;
`;
export const Bold = styled.span`
  font-weight: bold;
`;


// Banner
export const Header = styled(MDBContainer)`
  margin-bottom: 2.3rem;

  h1 {
    font-size: 2.4em;
    line-height: 1.5;
    color: rgb(65, 71, 84);
  }
  p {
    color: rgb(102, 102, 102);
    font-size: 1em;
    font-weight: 400;
    line-height: 1.625;
  }
  @media (min-width: 768px) {
    h1 {
      font-size: 3.3em;
    }
    p {
      font-size: 1.25rem;
    }
  }
`;


// DefineUs
export const Define = styled.div`
  background-color: rgba(242, 246, 249, 1);
  border-color: rgba(242, 246, 249, 1);
  text-align: center;
  padding-top: 5.5rem;
  padding-bottom: 2.8em;
`;



//Feature
export const Img = styled.img`
  height: 200px;
  margin-bottom: 1.5em;
`;

export const Media = styled(MDBCol)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-bottom: 2em;

  a {
    font-weight: bold;
    font-size: 1.8em;
    text-decoration: underline;
  }
`;

//TwoCol

export const Layout = styled.div`
  background-color: ${props => props.color && "rgb(242, 246, 249)"};
  padding-top: 80px;
  padding-bottom: 50px;
  img {
    max-width: 350px;
  }
  button {
    border-radius: 12px;
  }
 
  @media (max-width: 768px) {
    .resize {
      font-size: 2em;
    }
  }
`;
export const Wrap = styled.div`
  background-color: ${colors.gray}; 
`;

export const IconGroup = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.4rem;
  a {
    color: #000;
  }
`;

export const Span = styled.span`
  display: block;
  color: rgb(25, 24, 71);
`;
