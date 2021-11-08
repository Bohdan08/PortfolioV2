import * as React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";
import { graphql } from "gatsby";
import { Layout, Seo } from "../components";
import {
  Intro,
  About,
  Experience,
  Projects,
  Contact,
} from "../components/sections";

// import "../styles/GlobalStyle.js";

const StyledMain = styled.main`
  margin: 0 auto;
  max-width: 1600px;
  min-height: 100vh;
`;

const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Bohdan Martyniuk`;

  return (
    <Layout location={location}>
      <Seo title={siteTitle} />
      <StyledMain className="my-0 mx-auto w-100 fillHeight">
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </StyledMain>
    </Layout>
  );
};

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
