import {
  OutlinedInput as InputMui,
  withStyles,
  InputAdornment,
} from "@material-ui/core";
import { styleSheet } from "../jss/components/textfield";
import CheckIcon from "@material-ui/icons/Check";
import { useState } from "react";

function TextField(props) {
  const { classes, inputLabel } = props;
  const [inputValue, setInputValue] = useState();
  onchange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <>
      <span className={classes.inputLabel}> {inputLabel}</span>
      <InputMui
        onChange={onchange}
        classes={{ root: classes.root }}
        {...props}
        endAdornment={
          <InputAdornment position="end" classes={{ root: classes.inputIcon }}>
            {inputValue ? <CheckIcon /> : null}
          </InputAdornment>
        }
      />
    </>
  );
}

export default withStyles(styleSheet, { name: "TextField" })(TextField);
