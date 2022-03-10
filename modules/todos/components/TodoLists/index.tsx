import React from "react";
import { Box } from "@mantine/core";
import { ITodo } from "@todos/interfaces";
import useStyles from "./styles";
import { TodoItem } from "@todos/components";

export type TodoListsProps = {
  todos: ITodo[];
  onComplete: (isCompleted: boolean, index: number) => void;
  onDelete: (index: number) => void;
};

const TodoLists: React.FC<TodoListsProps> = ({
  todos,
  onComplete,
  onDelete,
}) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.container}>
      {todos.map((todo, index) => {
        return (
          <TodoItem
            todo={{ ...todo, index }}
            key={index}
            onComplete={onComplete}
            onDelete={onDelete}
          />
        );
      })}
    </Box>
  );
};

export default TodoLists;
