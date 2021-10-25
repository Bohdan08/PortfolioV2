import { Link } from "gatsby";
import React, { useState } from "react";
import styled from "styled-components";
import { NAV_LINKS } from "../constants";

const StyledHamburgerButton = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    position: relative;
    z-index: 10;
    margin-right: -15px;
    padding: 15px;
    border: 0;
    background-color: transparent;
    color: inherit;
    text-transform: none;
    transition-timing-function: linear;
    transition-duration: 0.15s;
    transition-property: opacity, filter;
  }

  .ham-box {
    display: inline-block;
    position: relative;
    width: 30px;
    height: 24px;
  }

  .ham-box-inner {
    position: absolute;
    top: 50%;
    right: 0;
    width: 30px;
    height: 2px;
    border-radius: 4px;
    background-color: #64ffda;
    transition-duration: 0.22s;
    transition-property: transform;
    transition-delay: ${({ menuOpen }) => (menuOpen ? `0.12s` : `0s`)};
    transform: rotate(${({ menuOpen }) => (menuOpen ? `225deg` : `0deg`)});
    transition-timing-function: cubic-bezier(
      ${({ menuOpen }) =>
        menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`}
    );

    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      left: auto;
      right: 0;
      width: 30px;
      height: 2px;
      border-radius: 4px;
      background-color: #64ffda;
      transition-timing-function: ease;
      transition-duration: 0.15s;
      transition-property: transform;
    }

    &:before {
      width: ${({ menuOpen }) => (menuOpen ? `100%` : `100%`)};
      top: ${({ menuOpen }) => (menuOpen ? `0` : `-10px`)};
      opacity: ${({ menuOpen }) => (menuOpen ? 0 : 1)};
      transition: ${({ menuOpen }) =>
        menuOpen
          ? "top 0.1s ease-out, opacity 0.1s ease-out 0.12s"
          : "top 0.1s ease-in 0.25s, opacity 0.1s ease-in"};
    }

    &:after {
      width: ${({ menuOpen }) => (menuOpen ? `100%` : `100%%`)};
      bottom: ${({ menuOpen }) => (menuOpen ? `0` : `-10px`)};
      transform: rotate(${({ menuOpen }) => (menuOpen ? `-90deg` : `0`)});
      transition: ${({ menuOpen }) =>
        menuOpen
          ? "bottom 0.1s ease-out"
          : "bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)"};
    }
  }
`;

const StyledSidebar = styled.aside`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    padding: 50px 10px;
    width: min(75vw, 400px);
    height: 100vh;
    outline: 0;
    background-color: #112240;
    box-shadow: -10px 0px 30px -15px rgba(2, 12, 27, 0.7);
    z-index: 9;
    transform: translateX(${({ menuOpen }) => (menuOpen ? 0 : 100)}vw);
    visibility: ${({ menuOpen }) => (menuOpen ? "visible" : "hidden")};
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  nav {
    width: 100%;
    flex-direction: column;
    color: #ccd6f6;
    font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
    text-align: center;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;

    li {
      position: relative;
      margin: 0 auto 20px;
      font-size: clamp(14px), 4vw, 18px);

      @media (max-width: 600px) {
        margin: 0 auto 10px;
      }
    }
    a {
      width: 100%;
      padding: 5px;
    }
  }

`;

const MobileNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  // style={{
  //   transform: `translateX(${menuOpen ? "0" : "100"})}vw)`,
  //   visibility: `${menuOpen ? "visible" : "hidden"}`,
  // }}
  console.log(menuOpen, "menuOpen");
  return (
    <div className="block md:hidden">
      {" "}
      <div>
        {" "}
        <StyledHamburgerButton
          onClick={toggleMenu}
          menuOpen={menuOpen}
          aria-label="Menu"
          className="focus: outline"
        >
          <div className="ham-box">
            <div className="ham-box-inner" />
          </div>
        </StyledHamburgerButton>
        <StyledSidebar
          className="menu-sidebar"
          menuOpen={menuOpen}
          aria-hidden={!menuOpen}
        >
          <nav>
            {NAV_LINKS && (
              <ul>
                {NAV_LINKS.map(({ url, name }) => (
                  <li key={name}>
                    <Link to={url} onClick={() => setMenuOpen(false)}>
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-10">
              <a
                className="hover:text-green-300 border rounded border-green-300 py-3 px-4 pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>
          </nav>
        </StyledSidebar>
      </div>
    </div>
  );
};

export default MobileNav;
