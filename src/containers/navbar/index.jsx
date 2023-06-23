import { Container, withStyles } from "@material-ui/core";
import { styleSheet } from "../../jss/containers/navbar";
import logo from "../../assets/logo.png";

function Navbar(props) {
  const { classes } = props;

  return (
    <Container>
      <div className={classes.root}>
        <img alt="logo" src={logo} />
      </div>
    </Container>
  );
}

export default withStyles(styleSheet, { name: "Navbar" })(Navbar);
