import React from "react";
import styled from "styled-components";
import { DAILY_SKILLS } from "../../constants";

import me from "../../images/me.jpeg";

const StyledAboutSection = styled.section`
  max-width: 1000px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--text-sm);

      &:before {
        content: "▹";
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--text-sm);
        line-height: 12px;
        top: 6px;
      }
    }
  }
`;

const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);
    &:hover,
    &:focus {
      background: transparent;
      outline: 0;
      &:after {
        top: 15px;
        left: 15px;
      }
      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }
    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }
    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }
    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }
    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const StyledLink = styled.a`
  &:focus {
    text-decoration: underline;
  }
`;

const About = () => {
  return (
    <StyledAboutSection id="about">
      {" "}
      <h2 className="section-heading">About Me</h2>
      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hi! My name is Bohdan Martyniuk and I'm a software developer. I
              started my professional career in April 2019 as a software
              developer at{" "}
              <StyledLink
                className="text-green-300 pointer outline-none"
                href="https://www.mpac.ca/en"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                MPAC.
              </StyledLink>{" "}
              Since then, I've been specializing in building dynamic web
              applications.
            </p>
            <p>
              {" "}
              I utilize following languages and technologies on a daily basis:
            </p>
          </div>
          <ul className="skills-list">
            {DAILY_SKILLS.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <img className="img" src={me} width={500} quality={95} alt="" />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
