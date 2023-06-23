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
import avatar from "../../../assets/avatar4.png";
import icon1 from "../../../assets/notification/0.png";
import icon03 from "../../../assets/notification/03.png";
import icon4 from "../../../assets/notification/4.png";
import icon02 from "../../../assets/notification/02.png";

function Step3(props) {
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
          <Title>Link your twitter account?</Title>
          <br />
          <Paragraph>
            AirLift usernames already used on Twitter require linking. You’ll
            receive additional coins, import your existing network and posts,
            and connect with other people through their Twitter via AirLift
            link.
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
              <FormControlLabel
                value="3"
                control={<Radio />}
                label="I'm banned"
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
          <br />
          <br />
          <br />
          <br />
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
              <Card icon={icon02} text="Import your existing network" />
              <Card icon={icon03} text="Import your existing network" />
              <Card icon={icon4} text="Import your existing network" />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styleSheet, { name: "Step3" })(Step3);
