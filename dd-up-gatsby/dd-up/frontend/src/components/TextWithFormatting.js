import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';

function TextWithFormatting({ text }) {
  const plugins = [remarkBreaks];

  return (
    <div>
      <ReactMarkdown remarkPlugins={plugins}>{text}</ReactMarkdown>
    </div>
  );
}

export default TextWithFormatting;