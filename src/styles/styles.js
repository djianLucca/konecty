import styled from "styled-components";

import banner from './../images/banner.svg';

const Banner = styled.div`
    position: relative;
    padding-top: 1.25em;
    background-image: url(${banner});
    height: 100%;
    width: 100%;
`;

const BannerContent = styled.div`
    margin-top: 20vh;
`;

const BannerText = styled.div`
    color: white;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    line-height: 1.5em;
    font-size: 1.25em;
    margin-top: 4.5rem;
`;

const BannerTitle = styled.div`
    color: white;
    font-family: Lato;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    font-size: 4rem;
`;

const ButtonsWrapper = styled.div`
    margin-top: 5rem;
    margin-bottom: 8rem;
`;

const Button = styled.button`
  background: #4BB9E4;
  border: 1px solid #4BB9E4;
  padding: 0.4em 1em 0.4em 2em; 
  display: flex;
  align-items: center;
  color: white;
  font-size: 1.25em;
  font-family: Lato;
  font-weight: bold;
  margin-right: 1em;
  border-radius: 3px;
  cursor: pointer;
`;

const Header = styled.div`
    position: relative;
    left: 0;
    box-sizing: border-box;
    z-index: 3;
    width: 100vw;
    height: 5.2rem;
    font-family: "Lato";
    font-size: 1.125em;
    font-weight: bold;
    line-height: normal
    background: transparent;
    padding-left: 3.75em;
    padding-right: 1.875em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Icon = styled.i`
    font-size: 1.5em;
    margin-left: 0.5em;
`;

const Navbar = styled.nav`
    width: 38rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & a {
        color: white;
        text-decoration: none;
    }
`;

const SemiBanner = styled.div`
    position: fixed;
    background-image: url(${banner});
    height: 5.2rem;
    width: 100vw;
`;

export {
    Banner,
    BannerContent,
    BannerText,
    BannerTitle,
    Button,
    ButtonsWrapper,
    Header,
    Icon,
    Navbar,
    SemiBanner
};