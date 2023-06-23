import { withStyles } from "@material-ui/core";
import { styleSheet } from "../jss/components/paragraph";

function Paragraph(props) {
  const { classes, children } = props;
  return <p className={classes.root}>{children}</p>;
}

export default withStyles(styleSheet, "Paragraph")(Paragraph);
