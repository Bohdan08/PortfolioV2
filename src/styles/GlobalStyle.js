import { createGlobalStyle } from "styled-components";
import variables from "./variables";

//   outline: 2px dashed var(--green);
//  body: color: var(--slate);

// .big-heading {
//   margin: 0;
//   font-size: clamp(40px, 8vw, 80px);
// }

const GlobalStyle = createGlobalStyle`
${variables};

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  width: 100%;
  min-height: 100%;
  overflow-x: hidden;
  background: var(--light-black);
  color: var(--slate);
}

:focus {
  outline: 1px solid var(--green);
  outline-offset: 2px;
  border-radius: 1px;
}

#root {
  min-height: 100vh;
}

main {
  margin: 0 auto;
  width: 100%;
  max-width: 1600px;
  min-height: 100vh;
  padding: 200px 150px;
  
  @media (max-width: 1080px) {
    padding: 200px 100px;
  }
  
  @media (max-width: 768px) {
    padding: 150px 50px;
  }
  
  @media (max-width: 480px) {
    padding: 125px 25px;
  }
   
  &.fillHeight {
      padding: 0 150px;
      @media (max-width: 1080px) {
        padding: 0 100px;
      }
      @media (max-width: 768px) {
        padding: 0 50px;
      }
      @media (max-width: 480px) {
        padding: 0 25px;
      }
    }
}

section {
  margin: 0 auto;
  padding: 100px 0;
  max-width: 1000px;

  @media (max-width: 768px) {
    padding: 80px 0;
  }

  @media (max-width: 480px) {
    padding: 60px 0;
  }
}

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 10px 0;
    font-weight: 600;
    color: var(--lightest-slate);
    line-height: 1.1;
  }


  p {
    margin: 0 0 15px 0;
    &:last-child,
    &:last-of-type {
      margin: 0;
    }
   
    & > code {
      background-color: var(--light-navy);
      color: var(--white);
      font-size: var(--fz-sm);
      border-radius: var(--border-radius);
      padding: 0.3em 0.5em;
    }
  }

a {
  display: inline-block;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  color: inherit;
  position: relative;
  transition: var(--transition);
 
  &:hover,
  &:focus {
    color: var(--green);
  }
}

.big-button {
    color:  var(--green);
    background-color: transparent;
    border: 1px solid var(--green);
    border-radius: var(--border-radius);
    padding: 0.75rem 1rem;
    font-size: var(--fz-xs);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    &:hover,
    &:focus,
    &:active {
      background-color: var(--green-tint);
      outline: none;
    }
    &:after {
      display: none !important;
    }
}

.link {
  display: inline-block;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  color: inherit;
  position: relative;
  transition: var(--transition);
  
  &:hover,
  &:active,
  &:focus {
    color: var(--green);
  }
}

.big-heading {
  margin: 0;
  font-size: clamp(20px, 8vw, 40px);
}

.section-heading {
  display: flex;
  align-items: center;
  position: relative;
  margin: 10px 0px 40px;
  width: 100%;
  font-size: clamp(var(--text-xl), 5vw, var(--text-3xl));
  white-space: nowrap;


  &:after {
    content: '';
    display: block;
    position: relative;
    top: 2px;
    width: 300px;
    height: 1px;
    margin-left: 20px;
    background-color: var(--lightest-navy);

    @media (max-width: 1080px) {
      width: 200px;
    }

    @media (max-width: 768px) {
      width: 100%;
    }

    @media (max-width: 600px) {
      margin-left: 10px;
    }
  }
}
 
`;

export default GlobalStyle;
