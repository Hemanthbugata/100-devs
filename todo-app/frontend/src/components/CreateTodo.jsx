import React, { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    fetch("http://localhost:3000/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        description: description,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Todo added:", data);
        setTitle("");
        setDescription("");
      })
      .catch((err) => {
        console.error("Error adding todo:", err);
      });
  };

  return (
    <div>
      <input
        id="title"
        style={{
          width: "200px",
          height: "30px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          padding: "5px",
          marginBottom: "10px",
        }}
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <input
        style={{
          width: "200px",
          height: "30px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          padding: "5px",
          marginBottom: "10px",
        }}
        type="text"
        id="description"
        placeholder="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <button
        style={{
          padding: "10px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
          marginTop: "10px",
        }}
        onClick={handleSubmit}
      >
        Add a todo
      </button>
    </div>
  );
}
