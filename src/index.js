import React from "react";
import ReactDOM from "react-dom";
import styled, { css, injectGlobal } from "react-emotion";
import TodoApp from "./TodoApp";

import "./styles.css";

injectGlobal`
  html {
    background-color: #743232;
  }

  body {
    margin: 0;
    padding: 0;
  }
  
  * {
    box-sizing: border-box;
  }
`;

const Container = styled("div")`
  font-family: sans-serif;
  text-align: center;
`;

const Header = styled("header")`
  background-color: #EDCF8E;
  color: white;
  padding: 10px 0;
  font-size: 30px;
  font-weight: 700;
`;

function App() {
  return (
    <Container className="App">
      <Header>Todo App</Header>
      <TodoApp />
    </Container>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
