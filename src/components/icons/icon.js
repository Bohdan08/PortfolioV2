import React from "react";
import PropTypes from "prop-types";
import { IconExternal, IconGitHub, IconLinkedin, IconGitLab } from "./index";

const Icon = ({ name }) => {
  switch (name) {
    case "External":
      return <IconExternal />;
    case "GitHub":
      return <IconGitHub />;
    case "Linkedin":
      return <IconLinkedin />;
    case "GitLab":
      return <IconGitLab />;
    default:
      return <IconExternal />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
