import React from "react";
import { Nav, Footer, Social, Email } from "./index";
import { GlobalStyle } from "../styles";

const Layout = ({ children, location }) => (
  <div id="root">
    <GlobalStyle />
    <Nav location={location} />
    <Social />
    <Email />
    <div className="mx-auto flex flex-col">{children}</div>
    <Footer />
  </div>
);

export default Layout;
