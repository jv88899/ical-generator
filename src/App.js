import React, { useState } from "react";
import "./style.css";

export default function App() {
  const [iCalText, setiCalText] = useState("");
  const [url, setURL] = useState("");
  const [password, setPassword] = useState("");

  const generateiCalText = () => {
    const newiCal = `Thank you for registering for this class. \\n \\nYou will receive an email with important information and instructions prior to the start of the class. \\n \\nWebex Link: ${url} \\nPassword: ${password}`;
    setiCalText(newiCal);
  };

  const handleChange = e => {
    if (e.target.name === "url") setURL(e.target.value);
    if (e.target.name === "password") setPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    generateiCalText();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="url">URL</label>
          <input type="text" name="url" onChange={handleChange} value={url} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            onChange={handleChange}
            value={password}
          />
        </div>
        <button type="submit">Create iCal Text</button>
      </form>
      <div>{iCalText && <p>{iCalText}</p>}</div>
      <div>
        <span>
          <button>Copy</button>
        </span>
      </div>
    </div>
  );
}
