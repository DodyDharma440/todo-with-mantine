import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  formWrapper: {
    display: "flex",
    alignItems: "center",
    margin: `0px ${theme.spacing.md}px`,
  },
  inputWrapper: {
    marginRight: theme.spacing.xs,
    flex: 1,
  },
}));

export default useStyles;
