import React from 'react';

function TextWithFormatting({ text }) {
  // Заменяем двойные переносы строки на открывающий и закрывающий теги <p>
  const replacedText = text.replace(/\n\n/g, '</p><p>');

  // Заменяем оставшиеся одинарные переносы строки на <br>
  const finalText = replacedText.replace(/\n/g, '<br>');

  // Используем dangerouslySetInnerHTML, чтобы вставить сформированный HTML
  return <div dangerouslySetInnerHTML={{ __html: finalText }} />;
}

export default TextWithFormatting;