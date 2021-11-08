import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { MobileNav } from "./index";
import { NAV_LINKS } from "../constants";

// assets
import logo from "../images/LogoMakr-3Abh9q.png";

const StyledNavItem = styled.li`
  margin: 0px 5px;
`;

const StyledLogo = styled.img`
  width: 70px;
  height: 70px;
`;

const Nav = ({ location, isLoading }) => {
  const [logoPath, setLogoPath] = useState(false);

  const isHome = location.hash === "";

  useEffect(() => {
    if (!logoPath && !isLoading) {
      setTimeout(() => {
        setLogoPath(logo);
      }, 500);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  console.log(logoPath, "logoPath");

  return (
    <header className="flex t-0 px-12 h-24 text-gray-200 text-sm">
      <nav className="flex justify-between items-center relative w-full">
        <div className="flex justify-center items-center">
          {logoPath ? (
            isHome ? (
              <StyledLogo src={logoPath} alt="" />
            ) : (
              <Link to="/" aria-label="home">
                <StyledLogo src={logoPath} alt="" />
              </Link>
            )
          ) : null}
        </div>
        <div className="md:flex items-center hidden">
          <ul className="flex justify-between p-0 m-0 list-none">
            {NAV_LINKS.map(({ name, url }) => (
              <StyledNavItem
                className="my-0 mx-2 hover:text-green-300"
                key={name}
              >
                <Link to={url} className="py-0 px-2">
                  {name}
                </Link>
              </StyledNavItem>
            ))}
          </ul>
          <div>
            <a
              tabIndex="0"
              href="/resume.pdf"
              className="big-button cursor-pointer hover:text-green-300  border rounded border-green-300 py-3 px-4 ml-4 pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
        <MobileNav />
      </nav>
    </header>
  );
};
export default Nav;
