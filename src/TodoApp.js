import React, { useState } from "react";
import styled from "react-emotion";
import TodoForm from "./TodoForm";
import Todos from "./Todos";

const TodoContainer = styled("div")`
  margin: auto;
  margin-top: 20px;
  padding: 10px;
  min-height: 500px;
  max-width: 300px;
  border-radius: 5px;
  background-color: #EDCF8E;
`;

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const toggleComplete = i =>
    setTodos(
      todos.map((todo, k) => {
        if (k === i) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );

  console.log(todos);
  return (
    <TodoContainer>
      <TodoForm
        onSubmit={value =>
          setTodos([...todos, { text: value, completed: false }])
        }
      />
      <Todos todos={todos} toggleComplete={toggleComplete} />
    </TodoContainer>
  );
};

export default TodoApp;
