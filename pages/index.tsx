import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import { useLocalStorageValue } from "@mantine/hooks";
import { Container } from "@common-components";
import { Header, TodoForm, TodoLists } from "@todos/components";
import { ITodo } from "@todos/interfaces";

const Home: NextPage = () => {
  const [persistedTodos, setPersistedTodos] = useLocalStorageValue({
    key: "todos",
    defaultValue: JSON.stringify([]),
  });
  const [todos, setTodos] = useState<ITodo[]>(JSON.parse(persistedTodos));

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

  useEffect(() => {
    setPersistedTodos(JSON.stringify(todos));
  }, [todos, setPersistedTodos]);

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
