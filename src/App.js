import React, { useState } from "react";
import "./style.css";

export default function App() {
  const [iCalText, setiCalText] = useState("");
  const [url, setURL] = useState('')
  const [password, setPassword] = useState('')

  const generateiCalText = () => {}

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="url">URL</label>
          <input type="text" name="url" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="text" name="password" />
        </div>
        <button type="submit">Create iCal Text</button>
      </form>
      <div>{iCalText && <p>{iCalText}</p>}</div>
    </div>
  );
}
