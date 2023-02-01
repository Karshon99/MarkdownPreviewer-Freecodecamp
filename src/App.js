import "./App.css";
import { marked } from "marked";
import { useState } from "react";

function App() {
  marked.setOptions({
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: false,
    smartLists: true,
    langPrefix: "language-",
  });
  const [text, setText] = useState(`
  # Heading

  **This is bolded text**
  > Block Quotes!


  ## Heading 2

  This is a paragraph

  - And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

  [visit website](https://costan-daniel.com)

  This is a inline  \`<div></div>\`

  This is a block of code

  \`\`\`
  let x = 1;
  let y = 2;
  let z = x + y;
  \`\`\`
![React](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
 `);

  const handleChange = (events) => {
    setText(events.target.value);
  };

  const parsedMarkdown = marked(text);

  return (
    <div>
      <h1 className="header">Convert Markdown</h1>

      <div className="bodystyling">
        <div className="row">
          <div className="editorStyle">
            <h4>Enter your markdown:</h4>
            <textarea
              className="form-control"
              id="editor"
              value={text}
              onChange={handleChange}
            />
          </div>
          <div className="previewstyle">
            <h4>Result:</h4>
            <div
              className="preview"
              dangerouslySetInnerHTML={{ __html: parsedMarkdown }}
              id="preview"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
