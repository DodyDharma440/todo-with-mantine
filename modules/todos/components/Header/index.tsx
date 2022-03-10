import React from "react";
import { Box } from "@mantine/core";
import useStyles from "./styles";

const Header = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.headerContainer}>
      <Box component="h1" className={classes.appTitle}>
        Todo App
      </Box>
    </Box>
  );
};

export default Header;
