import * as React from "react";
import { Layout } from "../components";
import { Intro, About, Experience, Projects } from "../components/sections";
import styled from "styled-components";

// import "../styles/GlobalStyle.js";

const StyledMain = styled.main`
  margin: 0 auto;
  max-width: 1600px;
  min-height: 100vh;
`;

const IndexPage = () => (
  <Layout>
    <StyledMain className="my-0 mx-auto w-100 fillHeight">
      <Intro />
      <About />
      <Experience />
      {/* <Projects /> */}
    </StyledMain>
  </Layout>
);

export default IndexPage;
