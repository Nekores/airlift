import { withStyles } from "@material-ui/core";
import { styleSheet } from "../jss/components/card";

function Card(props) {
  const { classes, icon, text } = props;
  return (
    <div className={classes.root}>
      <img src={icon} alt="avatar img" />
      <p>{text}</p>
    </div>
  );
}

export default withStyles(styleSheet, { name: "Card" })(Card);
