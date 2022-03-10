import React from "react";
import { Paper, Text, ActionIcon } from "@mantine/core";
import { HiOutlineCheckCircle, HiOutlineTrash } from "react-icons/hi";
import { ITodo } from "@todos/interfaces";
import useStyles from "./styles";

export type TodoItemProps = {
  todo: ITodo & { index: number };
  onComplete: (isCompleted: boolean, index: number) => void;
  onDelete: (index: number) => void;
};

const TodoItem: React.FC<TodoItemProps> = ({ todo, onComplete, onDelete }) => {
  const { classes } = useStyles();

  return (
    <Paper
      className={classes.container}
      sx={{
        opacity: todo.isCompleted ? "0.6" : "1",
      }}
    >
      <Text
        component="p"
        className={classes.todoText}
        sx={{
          textDecoration: todo.isCompleted ? "line-through" : "none",
        }}
      >
        {todo.title}
      </Text>
      <ActionIcon
        variant="outline"
        color="green"
        onClick={() => onComplete(todo.isCompleted, todo.index)}
      >
        <HiOutlineCheckCircle size={24} />
      </ActionIcon>
      <ActionIcon
        variant="outline"
        color="red"
        onClick={() => onDelete(todo.index)}
      >
        <HiOutlineTrash size={24} />
      </ActionIcon>
    </Paper>
  );
};

export default TodoItem;
