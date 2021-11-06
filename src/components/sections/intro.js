import React from "react";
import styled from "styled-components";

const StyledHeader = styled.h2`
  color: var(--lightest-slate);
`;

const StyledLink = styled.a`
  &:focus {
    text-decoration: underline;
  }
`;

// color: #ccd6f6;

const Intro = () => (
  <section>
    <h1 className="text-green-300 text-lg">Hi, my name is</h1>
    <StyledHeader className="mt-2 font-semibold text-gray-100 big-heading">
      Bohdan Martyniuk.
    </StyledHeader>
    <p className="pt-5 text-gray-400 text-lg">
      {" "}
      I’m a software engineer specializing in building web-applications. <br />
      Currently, I’m focused on building accessible, mobile-first, responsive
      web-pages at{" "}
      <StyledLink
        className="text-green-300 pointer outline-none"
        href="https://www.bmo.com/main/personal"
        target="_blank"
        rel="noreferrer"
      >
        Bank of Montreal
      </StyledLink>
      .
    </p>
  </section>
);

export default Intro;
