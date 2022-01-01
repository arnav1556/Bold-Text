import React, { useState } from "react";
import ReactHtmlParser from "react-html-parser";

import "./styles.css";

function App() {
  const [text, setText] = React.useState("");
  const [boldFont, setBoldFont] = React.useState(false);
  return (
    <div className="App">
      <div
        style={{
          fontWeight: boldFont ? "bold" : "normal"
        }}
      >
        <span>{text || "Text Example"}</span>
      </div>
      <div>
        <button onClick={() => setBoldFont(!boldFont)}>Bold</button>
        <input
          type="text"
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default App;
