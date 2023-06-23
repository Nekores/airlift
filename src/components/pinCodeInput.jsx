import { withStyles } from "@material-ui/core";
import { styleSheet } from "../jss/components/pinCodeInput";

function PinCodeInput(props) {
  const { classes, pinNum } = props;
  return (
    <div className={classes.root}>
      {pinNum.split("").map((item, index) => {
        return (
          <input
            key={index}
            className="pinInput"
            maxLength="1"
            autoFocus={index === 0 ? true : false}
            // defaultValue={item}
          />
        );
      })}
    </div>
  );
}

export default withStyles(styleSheet, { name: "PinCodeInput" })(PinCodeInput);
