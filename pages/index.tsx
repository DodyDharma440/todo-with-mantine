import React, { useState } from "react";
import { NextPage } from "next";
import { Container } from "@common-components";
import { Header, TodoForm, TodoLists } from "@todos/components";
import { ITodo } from "@todos/interfaces";

const Home: NextPage = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  console.log("todos => ", todos);

  const handleSubmitTodo = (todo: ITodo) => {
    setTodos((_todos) => [..._todos, todo]);
  };

  const handleComplete = (isComplete: boolean, index: number) => {
    const todo: ITodo = { ...todos[index], isCompleted: !isComplete };
    todos[index] = todo;
    setTodos([...todos]);
  };

  const handleDelete = (index: number) => {
    todos.splice(index, 1);
    setTodos([...todos]);
  };

  return (
    <Container>
      <Header />
      <TodoForm onSubmitTodo={handleSubmitTodo} />
      <TodoLists
        todos={todos}
        onComplete={handleComplete}
        onDelete={handleDelete}
      />
    </Container>
  );
};

export default Home;
