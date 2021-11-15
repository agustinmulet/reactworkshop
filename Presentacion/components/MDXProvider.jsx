import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import okaidia from "react-syntax-highlighter/dist/cjs/styles/prism/okaidia";
import SlidePage from "../layouts/SlidePage";
import Cover from "./Cover";
import SpeakerNotes from "./SpeakerNotes";
import Step from "./Step";
import Steps from "./Steps";
import { motion } from "framer-motion";
import Image from "next/image";

const mdComponents = {
  h1: (props) => <h1 {...props} />,
  h3: (props) => <h3 {...props} style={{ marginBottom: 0 }} />,
  p: (props) => <p {...props} style={{ marginTop: 0 }} />,
  pre: (props) => props.children,
  code: (props) => {
    const { className } = props;
    const language = className.replace("language-", "");
    return (
      <SyntaxHighlighter
        className={className}
        language={language}
        style={okaidia}
        {...props}
      />
    );
  },
  img: (props) => {
  return (<Image
    height={imageSizes[props.alt].height}
    width={imageSizes[props.alt].width}
    layout='fixed'
    {...props}
  />)
  },
  Cover,
  SlidePage,
  SpeakerNotes,
  Step,
  Steps,
  motion,
};

const Provider = ({ children }) => (
  <MDXProvider components={mdComponents}>{children}</MDXProvider>
);

const imageSizes = {
  'Logo React': {
    height: "400px",
    width: "400px"
  },
  'Mi cara': {
    height: "300px",
    width: "300px"
  },
  'Logo SCV': {
    height: "150px",
    width: "300",
  },
  'Diagrama de jerarquía de componentes': {
    height: "480px",
    width: "640px"
  },
  'Separando en componentes': {
    height: "889px",
    width: "604px"
  }
}

export default Provider;
