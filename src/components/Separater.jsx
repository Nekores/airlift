import { withStyles } from "@material-ui/core";
import { styleSheet } from "../jss/components/separater";

function Separater(props) {
  const { classes, children } = props;
  return <div className={classes.root}> {children}</div>;
}

export default withStyles(styleSheet, { name: "Separater" })(Separater);
