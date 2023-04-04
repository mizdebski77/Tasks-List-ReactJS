import { useRef, useState } from "react";
import { Button, Container, Input } from "./styled";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addTask } from "../../tasksSlice";

export const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const inputFocus = useRef(null);

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    const trimmedContent = newTaskContent.trim();

    if (!trimmedContent) {
      return;
    }

    dispatch(addTask({
      content: trimmedContent,
      done: false,
      id: nanoid(),
    }));

    setNewTaskContent("");
    inputFocus.current.focus();
  };


  return (
    <Container
      onSubmit={onFormSubmit}
    >
      <Input
        ref={inputFocus}
        value={newTaskContent}
        onChange={({ target }) => setNewTaskContent(target.value)}
        placeholder="Task list" />
      <Button> Add new task </Button>
    </Container>
  );
};

