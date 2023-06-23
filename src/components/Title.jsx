/**
 * By - SAJID U. <sajidxullah@gmail.com> 
 **/

import { withStyles } from "@material-ui/core";
import { styleSheet } from "../jss/components/title";

function Title(props) {
  const { classes, children } = props;
  return <h2 className={classes.root}> {children}</h2>;
}

export default withStyles(styleSheet, { name: "Title" })(Title);
