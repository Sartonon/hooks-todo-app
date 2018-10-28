import React, { useState } from "react";
import styled from "react-emotion";

const Form = styled("form")`
  input {
    border: none;
    border-radius: 5px;
    height: 30px;
    padding 0 10px;
  }
`;

const useInputValue = () => {
  const [value, setValue] = useState("");

  return {
    value,
    onChange: e => setValue(e.target.value),
    resetValue: () => setValue("")
  };
};

const TodoForm = ({ onSubmit }) => {
  const todoText = useInputValue("");

  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        if (todoText.value.trim() === "") {
          return;
        }
        onSubmit(todoText.value);
        todoText.resetValue();
      }}
    >
      <input type="text" placeholder="Add a todo" {...todoText} />
    </Form>
  );
};

export default TodoForm;
