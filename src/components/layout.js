import React from "react";
import { Nav, Footer, Social, Email } from "./index";
import { GlobalStyle } from "../styles";

const Layout = ({ children }) => (
  <div id="root">
    <GlobalStyle />
    <Nav />
    <Social />
    <Email />
    <div class="mx-auto flex flex-col">{children}</div>
    <Footer />
  </div>
);

export default Layout;
