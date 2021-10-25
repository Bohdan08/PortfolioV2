import React from "react";
import { Nav } from "./index";
import { GlobalStyle } from "../styles";

const Layout = ({ children }) => {
  return (
    <div id="root">
      <GlobalStyle />
      <Nav />
      <div class="mx-auto flex flex-col">{children}</div>
    </div>
  );
};

export default Layout;
