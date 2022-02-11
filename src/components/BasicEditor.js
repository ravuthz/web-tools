import { useRef, useState } from "react";
import ContentEditable from "react-contenteditable";

const BasicEditor = ({ value, disabled }) => {
  const element = useRef("");
  const [html, setHtml] = useState(value || "");
  const handleChange = (e) => {
    const text = e.target.value;
    console.log({ text });
    setHtml(text.replaceAll(/\u200b/gu, '•').replaceAll('•', '<span class="red-dot">•</span>'));
  };

  return (
    <ContentEditable
      innerRef={element}
      html={html} // innerHTML of the editable div
      disabled={disabled} // use true to disable editing
      onChange={handleChange} // handle innerHTML change
      tagName="article" // Use a custom HTML tag (uses a div by default)
      style={{ border: '1px solid red' }}
    />
  );
};

export default BasicEditor;
