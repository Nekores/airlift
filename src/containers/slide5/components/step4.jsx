import { Paragraph, Title, Button, Card } from "../../../components";
import {
  Grid,
  withStyles,
  Hidden,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import { styleSheet } from "../../../jss/pages/slide5";
import avatar from "../../../assets/avatar5.png";
import icon1 from "../../../assets/notification/0.png";
import icon2 from "../../../assets/notification/2.png";
import icon3 from "../../../assets/notification/3.png";
import icon4 from "../../../assets/notification/4.png";

function Step4(props) {
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
          <Title>Link your bittrex account?</Title>
          <br />
          <Paragraph>
            You can link your Bittrex account or create a new one for the first
            time to verify your identity and fully unlock your AirLift account.
          </Paragraph>

          <br />
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="link-twitter"
              name="linkTwitter"
              value="1"
              onChange={() => console.log("change event")}
            >
              <FormControlLabel
                value="1"
                control={<Radio />}
                label="Let's rock and roll"
              />
              <FormControlLabel
                value="2"
                control={<Radio />}
                label="Maybe later"
              />
            </RadioGroup>
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

export default withStyles(styleSheet, { name: "Step4" })(Step4);
