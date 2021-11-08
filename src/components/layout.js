import React, { useState, useEffect } from "react";
import { Nav, Footer, Social, Email } from "./index";
import { GlobalStyle } from "../styles";
import Loader from "./loader";

const Layout = ({ children, location }) => {
  const isHome = location.hash === "";
  const [isLoading, setIsLoading] = useState(isHome);

  // Sets target="_blank" rel="noopener noreferrer" on external links
  const handleExternalLinks = () => {
    const allLinks = Array.from(document.querySelectorAll("a"));
    if (allLinks.length > 0) {
      allLinks.forEach((link) => {
        if (link.host !== window.location.host) {
          link.setAttribute("rel", "noopener noreferrer");
          link.setAttribute("target", "_blank");
        }
      });
    }
  };

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (location.hash) {
      const id = location.hash.substring(1); // location.hash without the '#'
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
          el.focus();
        }
      }, 0);
    }

    handleExternalLinks();
  }, [isLoading]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div id="root">
      <GlobalStyle />
      {isLoading && isHome ? (
        <Loader finishLoading={() => setIsLoading(false)} />
      ) : (
        <div className="flex flex-col min-h-screen">
          <Nav location={location} />
          <Social />
          <Email />
          <div className="mx-auto flex flex-col">{children}</div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Layout;
