import React from "react";
import styled from "react-emotion";

const TodosContainer = styled("div")`
  margin-top: 20px;
`;

const Todo = styled("div")`
  background-color: ${({ completed }) => (completed ? "green" : "red")};
  color: white;
  padding: 10px;
  border-radius: 5px;
  margin-top: 5px;
  cursor: pointer;
`;

const Todos = ({ todos, toggleComplete }) => {
  console.log(todos);
  return (
    <TodosContainer>
      {todos.map((todo, i) => (
        <Todo
          key={i}
          onClick={() => toggleComplete(i)}
          completed={todo.completed}
        >
          {todo.text}
        </Todo>
      ))}
    </TodosContainer>
  );
};

export default Todos;
