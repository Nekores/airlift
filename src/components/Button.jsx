import { Button as MuiButton, withStyles } from "@material-ui/core";
import { styleSheet } from "../jss/components/button";

function Button(props) {
  const { classes, children } = props;
  return (
    <MuiButton
      classes={{ root: classes.root }}
      variant="contained"
      color="primary"
      {...props}
    >
      {children}
    </MuiButton>
  );
}

export default withStyles(styleSheet, { name: "Button" })(Button);
