import React from "react";
import styled from "styled-components";
import { EMAIL } from "../../constants";

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .title {
    font-size: clamp(30px, 5vw, 45px);
  }

  .email-link {
    margin-top: 50px;
  }
`;

const Contact = () => (
  <StyledContactSection id="contact">
    <h2 className="title">Get In Touch</h2>
    <p className="pt-5">Please feel free to contact me anytime!</p>
    <a tabIndex="0" className="email-link big-button" href={`mailto:${EMAIL}`}>
      Email me
    </a>
  </StyledContactSection>
);

export default Contact;
