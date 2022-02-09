import { useRef } from "react";

// const normalizeHtml = (html) => {
//   return html && html.replace(/&nbsp;|\u202F|\u00A0/g, " ");
// };

const MyDiv = ({ ref, rows = 3, html, onChange, disabled, ...props }) => {
  const element = useRef("");
  return (
    <div
      ref={element}
      contentEditable={!disabled}
      dangerouslySetInnerHTML={{ __html: html }}
      onInput={onChange}
      style={{ height: rows * 26 }}
      {...props}
    ></div>
  );
};

export default MyDiv;
