import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  headerContainer: {
    display: "flex",
    padding: `${theme.spacing.xs}px 0px`,
    justifyContent: "center",
  },
  appTitle: {
    margin: 0,
    fontSize: 36,
  },
}));

export default useStyles;
