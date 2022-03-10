import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  container: {
    padding: theme.spacing.md,
    display: "flex",
    alignItems: "center",
    columnGap: theme.spacing.xs,
  },
  todoText: {
    marginRight: theme.spacing.lg,
    flex: 1,
  },
}));

export default useStyles;
