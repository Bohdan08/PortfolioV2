import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import {
  KEY_CODES,
  PROJECTS_INFO,
  PROJECTS_TECHNOLOGIES,
} from "../../constants";
import Icon from "../icons/icon";
// import { Icon } from "../icons/icon";

const StyledAboutSection = styled.section`
  max-width: 1000px;

  .inner {
    display: flex;
    @media (max-width: 600px) {
      display: block;
    }

    @media (min-width: 700px) {
      min-height: 340px;
    }
  }
`;
// max-width: 350px;
const StyledPic = styled.div`
  position: relative;

  margin: auto;
  max-width: 350px;
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
    border-radius: 2px;

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
      height: 100%;
      width: 100%;
      max-height: 400px;
    }
  }
`;

const StyledList = styled.ul`


    padding: 0;
    margin: 0;
    list-style: none;
    font-size: var(--text-sm);
    margin-top: 10px;
    li {
      position: relative;
      padding-left: 20px;
      margin-bottom: 5px;
      &:before {
        content: "▹";
        position: absolute;
        left: 0;
        top: 0;
        color: var(--green);
      }
`;

const StyledListSkills = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  grid-gap: 0 10px;
  padding: 0;
  margin-top: 10px;
  overflow: hidden;
  list-style: none;


   li {
      position: relative;
      padding-left: 20px;
      margin-bottom: 5px;
      &:before {
        content: "▹";
        position: absolute;
        left: 0;
        top: 0;
        color: var(--green);
      }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  color: var(--light-slate);

  a {
    margin-right: 10px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const StyledTabList = styled.div`
  position: relative;
  z-index: 3;
  width: max-content;
  padding: 0;
  margin: 0;
  list-style: none;

  @media (max-width: 600px) {
    display: flex;
    overflow-x: auto;
    width: calc(100% + 100px);
    padding-left: 50px;
    margin-left: -50px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    width: calc(100% + 50px);
    padding-left: 25px;
    margin-left: -25px;
  }

  li {
    &:first-of-type {
      @media (max-width: 600px) {
        margin-left: 50px;
      }
      @media (max-width: 480px) {
        margin-left: 25px;
      }
    }

    &:last-of-type {
      @media (max-width: 600px) {
        padding-right: 50px;
      }

      @media (max-width: 480px) {
        padding-right: 25px;
      }
    }
  }
`;
const StyledTabButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--tab-height);
  padding: 0 20px 2px;
  border-left: 2px solid var(--lightest-navy);
  background-color: transparent;
  color: ${({ isActive }) => (isActive ? "var(--green)" : "var(--slate)")};
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  text-align: left;
  white-space: nowrap;

  @media (max-width: 768px) {
    padding: 0 15px 2px;
  }

  @media (max-width: 600px) {
    min-width: 120px;
    padding: 0 15px;
    border-left: 0;
    border-bottom: 2px solid var(--lightest-navy);
    text-align: center;
  }

  &:hover,
  &:focus {
    background-color: var(--light-navy);
  }
`;

const StyledHighlight = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 2px;
  height: var(--tab-height);
  border-radius: var(--border-radius);
  background: var(--green);
  transform: translateY(
    calc(${({ activeTabId }) => activeTabId} * var(--tab-height))
  );
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;
  @media (max-width: 600px) {
    top: auto;
    bottom: 0;
    width: 100%;
    max-width: var(--tab-width);
    height: 2px;
    margin-left: 50px;
    transform: translateX(
      calc(${({ activeTabId }) => activeTabId} * var(--tab-width))
    );
  }
  @media (max-width: 480px) {
    margin-left: 25px;
  }
`;

const ProjectsContainer = styled.div`
  max-height: 600px;
  overflow: scroll;
`;

const Projects = () => {
  const [activeTabId, setActiveTabId] = useState(0);
  const [tabFocus, setTabFocus] = useState(null);
  const [activeTabName, setActiveTabName] = useState(PROJECTS_TECHNOLOGIES[0]);

  const tabs = useRef([]);

  const focusTab = () => {
    if (tabs.current[tabFocus]) {
      tabs.current[tabFocus].focus();
      return;
    }
    // If we're at the end, go to the start
    if (tabFocus >= tabs.current.length) {
      setTabFocus(0);
    }
    // If we're at the start, move to the end
    if (tabFocus < 0) {
      setTabFocus(tabs.current.length - 1);
    }
  };

  useEffect(() => focusTab(), [tabFocus]); // eslint-disable-line react-hooks/exhaustive-deps

  // Focus on tabs when using up & down arrow keys
  const onKeyDown = (e) => {
    switch (e.key) {
      case KEY_CODES.ARROW_UP: {
        e.preventDefault();
        setTabFocus(tabFocus - 1);
        break;
      }

      case KEY_CODES.ARROW_DOWN: {
        e.preventDefault();
        setTabFocus(tabFocus + 1);
        break;
      }

      default: {
        break;
      }
    }
  };

  return (
    <StyledAboutSection id="projects">
      {" "}
      <h2 className="section-heading">Side Projects</h2>
      <div className="inner">
        <StyledTabList
          role="tablist"
          aria-label="Experience"
          onKeyDown={(e) => onKeyDown(e)}
        >
          {PROJECTS_TECHNOLOGIES.map((mainTechnology, index) => (
            <StyledTabButton
              className="link"
              key={index}
              isActive={activeTabId === index}
              onClick={() => {
                setActiveTabId(index);
                setActiveTabName(mainTechnology);
              }}
              id={`tab-${index}`}
              role="tab"
              tabIndex={activeTabId === index ? "0" : "-1"}
              aria-selected={activeTabId === index}
              aria-controls={`panel-${index}`}
            >
              <span>{mainTechnology}</span>
            </StyledTabButton>
          ))}

          <StyledHighlight activeTabId={activeTabId} />
        </StyledTabList>
        <ProjectsContainer className="w-100 flex flex-col ml-5">
          {PROJECTS_INFO.map(
            (
              {
                project,
                description,
                url,
                features,
                technologies,
                github,
                imgSrc,
                mainTechnology,
              },
              index
            ) =>
              mainTechnology === activeTabName && (
                <div key={index} className="mb-5">
                  {" "}
                  <div
                    className="rounded p-5 grid grid-cols-2"
                    style={{ background: "#112240" }}
                  >
                    <div>
                      <h4 className="text-xl"> {project} </h4>
                      <p className="pt-2">{description}</p>
                      <p className="text-green-300 pt-2"> Features </p>
                      <StyledList className="list-outside text-sm">
                        {features.map((item) => (
                          <li key={item}>{item} </li>
                        ))}
                      </StyledList>

                      <p className="text-green-300 pt-5"> Main Technologies </p>
                      <StyledListSkills className="list-outside text-sm skills-list">
                        {technologies.map((item) => (
                          <li key={item}> {item} </li>
                        ))}
                      </StyledListSkills>
                    </div>
                    <div className="m-auto">
                      <StyledPic>
                        <div className="wrapper">
                          <a
                            href={url}
                            className="block"
                            aria-label="External Link"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img className="img" src={imgSrc} alt="" />
                          </a>
                        </div>
                      </StyledPic>
                    </div>
                    <IconContainer className="pt-4">
                      {github && (
                        <a
                          href={github}
                          aria-label="GitHub Link"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Icon name="GitHub" />
                        </a>
                      )}
                      {url && (
                        <a
                          href={url}
                          aria-label="External Link"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Icon name="External" />
                        </a>
                      )}
                    </IconContainer>
                  </div>
                </div>
              )
          )}
        </ProjectsContainer>
      </div>
    </StyledAboutSection>
  );
};

export default Projects;
