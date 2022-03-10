import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  containerWrapper: {
    backgroundColor: theme.black,
    minHeight: "100vh",
    minWidth: "100vw",
  },
  container: {
    minHeight: "100vh",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[8]
        : theme.colors.gray[1],
  },
}));

export default useStyles;
