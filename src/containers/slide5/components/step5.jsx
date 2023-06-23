import {
  Paragraph,
  Title,
  Button,
  Card,
  PinCodeInput,
} from "../../../components";
import { Grid, withStyles, Hidden, FormControl } from "@material-ui/core";
import { styleSheet } from "../../../jss/pages/slide5";
import avatar from "../../../assets/avatar5.png";
import icon1 from "../../../assets/notification/0.png";
import icon2 from "../../../assets/notification/2.png";
import icon3 from "../../../assets/notification/3.png";
import icon4 from "../../../assets/notification/4.png";

function Step5(props) {
  const { classes } = props;

  return (
    <div className={classes.subRoot}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={12} sm={10} md={5}>
          <Title>Enter your security code</Title>
          <br />
          <Paragraph>Bittrex provides user unique AirLift claim code</Paragraph>

          <br />
          <FormControl component="fieldset">
            <PinCodeInput pinNum="09876543" />
          </FormControl>
          <br />
          <br />
          <Button
            variant="contained"
            color="primary"
            onClick={props.handleNext}
          >
            Continue
          </Button>
        </Grid>

        <Hidden smDown>
          <Grid item>
            <img src={avatar} alt="Side Avatar" />
          </Grid>
        </Hidden>
        <Grid item xs={12}>
          <div className={classes.notificationGroup}>
            <br />
            <Title> Perks Included</Title>
            <div className={classes.cardsWrapper}>
              <Card icon={icon1} text="Import your existing network" />
              <Card icon={icon2} text="Import your existing network" />
              <Card icon={icon3} text="Import your existing network" />
              <Card icon={icon4} text="Import your existing network" />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styleSheet, { name: "Step5" })(Step5);
