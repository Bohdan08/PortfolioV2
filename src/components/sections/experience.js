import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import { EXPERIENCE_LIST, KEY_CODES } from "../../constants";

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
    width: 100%;
    margin-bottom: 30px;
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
    justify-content: center;
    min-width: 120px;
    padding: 0 15px;
    border-left: 0;
    border-bottom: ${({ isActive }) =>
      isActive ? "2px solid var(--green)" : "none"};
    outline: none !important;
    text-align: center;
  }

  &:hover,
  &:focus {
    background-color: var(--pantone);
  }
`;

const StyledTabPanels = styled.div`
  position: relative;
  width: 100%;
  margin-left: 20px;

  @media (max-width: 600px) {
    margin-left: 0;
  }
`;

const StyledTabPanel = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 5px;

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: var(--text-lg);

    li {
      position: relative;
      padding-left: 20px;
      margin-bottom: 10px;

      &:before {
        content: "";
        position: absolute;
        left: 0;
        top: 10px;
        height: 5px;
        width: 5px;
        border: 1px solid var(--green);
        border-width: 2px 2px 0 0;
        line-height: 12px;
        transform: rotate(45deg);
      }
    }
  }

  h3 {
    margin-bottom: 2px;
    font-size: var(--fz-xxl);
    font-weight: 500;
    line-height: 1.3;
    .company {
      color: var(--green);
    }
  }
  .range {
    margin-bottom: 25px;
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }
`;

const StyledLink = styled.a`
  &:focus {
    underline: link;
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
  transition-delay: 0.15s;

  @media (max-width: 600px) {
    display: none;
  }
`;

const Experience = () => {
  const [activeTabId, setActiveTabId] = useState(0);
  const [tabFocus, setTabFocus] = useState(null);

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
    <StyledAboutSection id="experience">
      {" "}
      <h2 className="section-heading">Experience</h2>
      <div className="inner">
        <StyledTabList
          role="tablist"
          aria-label="Experience"
          onKeyDown={(e) => onKeyDown(e)}
        >
          {EXPERIENCE_LIST.map(({ company }, index) => (
            <StyledTabButton
              className="link"
              key={index}
              isActive={activeTabId === index}
              onClick={() => setActiveTabId(index)}
              id={`tab-${index}`}
              role="tab"
              tabIndex={activeTabId === index ? "0" : "-1"}
              aria-selected={activeTabId === index}
              aria-controls={`panel-${index}`}
            >
              <span>{company}</span>
            </StyledTabButton>
          ))}
          <StyledHighlight activeTabId={activeTabId} />
        </StyledTabList>

        <StyledTabPanels>
          {EXPERIENCE_LIST.map(
            ({ title, url, company, timeLine, workDone }, index) => (
              <CSSTransition
                key={index}
                in={activeTabId === index}
                timeout={300}
                classNames="alert"
                unmountOnExit
              >
                <StyledTabPanel
                  key={index}
                  id={`panel-${index}`}
                  role="tabpanel"
                  tabIndex={activeTabId === index ? "0" : "-1"}
                  aria-labelledby={`tab-${index}`}
                  aria-hidden={activeTabId !== index}
                  hidden={activeTabId !== index}
                >
                  <h3>
                    <span>{title}</span>
                    <span className="company">
                      &nbsp;@&nbsp;
                      <StyledLink
                        href={url}
                        className="inline-link link focus:outline-none"
                      >
                        {company}
                      </StyledLink>
                    </span>
                  </h3>

                  <p className="range">{timeLine}</p>

                  <ul>
                    {workDone &&
                      workDone.map((item, key) => <li key={key}>{item} </li>)}
                  </ul>
                </StyledTabPanel>
              </CSSTransition>
            )
          )}
        </StyledTabPanels>
      </div>
    </StyledAboutSection>
  );
};

export default Experience;
