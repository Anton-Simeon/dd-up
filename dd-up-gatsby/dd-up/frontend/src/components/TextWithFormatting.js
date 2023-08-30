import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import rehypeRaw from "rehype-raw";

function TextWithFormatting({ text }) {
  const plugins = [remarkBreaks];

  return (
    <>
      <ReactMarkdown remarkPlugins={plugins} rehypePlugins={[rehypeRaw]}>{text}</ReactMarkdown>
    </>
  );
}

export default TextWithFormatting;