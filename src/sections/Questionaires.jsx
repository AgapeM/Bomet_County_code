import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import db from "../firebase";

const Questionaires = () => {
  const [username, setUsername] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const createQuestionaire = async (e) => {
    await e.preventDefault();
    await db
      .collection("questionaires")
      .add({
        username: username,
        title: title,
        description: description,
      })
      .then(async () => {
        await setUsername("");
        await setTitle("");
        await setDescription("");
      });
  };
  return (
    <Form>
      <Form.Label>
        What is the current progress and what has been done so far?
      </Form.Label>
      <Form.Group className="mb-3" controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Enter Username"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Enter Title"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Enter Description"
        />
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        onClick={(e) => {
          createQuestionaire(e);
        }}
      >
        Submit
      </Button>
    </Form>
  );
};

export default Questionaires;
