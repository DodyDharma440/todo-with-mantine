import React, { useState } from "react";
import { Box, Input, Button } from "@mantine/core";
import { useNotifications } from "@mantine/notifications";
import { ITodo } from "@todos/interfaces";
import useStyles from "./styles";

export type TodoFormProps = {
  onSubmitTodo: (todo: ITodo) => void;
};

const TodoForm: React.FC<TodoFormProps> = ({ onSubmitTodo }) => {
  const { classes } = useStyles();
  const { showNotification } = useNotifications();
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.length === 0) {
      showNotification({
        title: "Error",
        message: "Todo title cannot be empty",
        color: "blue",
      });
      return;
    }

    onSubmitTodo({
      title: inputValue,
      isCompleted: false,
    });

    setInputValue("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <Box
      onSubmit={handleSubmit}
      component="form"
      className={classes.formWrapper}
    >
      <Input
        value={inputValue}
        classNames={{
          wrapper: classes.inputWrapper,
        }}
        placeholder="Todo title here..."
        onChange={handleChange}
      />
      <Button type="submit">Add</Button>
    </Box>
  );
};

export default TodoForm;
