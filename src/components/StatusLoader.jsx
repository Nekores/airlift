import { withStyles, CircularProgress } from "@material-ui/core";
import { styleSheet } from "../jss/components/statusLoader";

function StatusLoader(props) {
  const { classes, statusText, icon } = props;
  return (
    <span className={classes.root}>
      {icon ? (
        icon
      ) : (
        <CircularProgress color="secondary" size={20} thickness={5} />
      )}

      <p> {statusText}</p>
    </span>
  );
}

export default withStyles(styleSheet, { name: "StatusLoader" })(StatusLoader);
