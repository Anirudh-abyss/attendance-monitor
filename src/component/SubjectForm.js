import React from "react";
import { useState } from "react";

function SubjectForm({ addSubject }) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
        e.preventDefault(); // stop page refresh
        if (name.trim().length === 0) return; // ignore empty input
        addSubject(name); // call parent function from App.js
        setName(""); // clear input box
    }

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-2 mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter subject"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
  );
}

export default SubjectForm;
