import React from "react";
import { Container as MantineContainer, Box } from "@mantine/core";
import useStyles from "./styles";

export type ContainerProps = {
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.containerWrapper}>
      <MantineContainer className={classes.container} size="xs">
        {children}
      </MantineContainer>
    </Box>
  );
};

export default Container;
