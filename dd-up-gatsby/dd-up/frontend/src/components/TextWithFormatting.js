import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import rehypeRaw from "rehype-raw";

function TextWithFormatting({ text }) {
  const plugins = [remarkBreaks];

  return (
    <div>
      <ReactMarkdown remarkPlugins={plugins} rehypePlugins={[rehypeRaw]}>{text}</ReactMarkdown>
    </div>
  );
}

export default TextWithFormatting;