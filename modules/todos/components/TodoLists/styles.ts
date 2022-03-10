import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    rowGap: theme.spacing.md,
    marginTop: theme.spacing.xl,
    padding: `0px ${theme.spacing.xs}px`,
  },
}));

export default useStyles;
