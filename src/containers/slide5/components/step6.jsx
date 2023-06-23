import { Paragraph, Title, Button } from "../../../components";
import { Grid, withStyles, Hidden } from "@material-ui/core";
import { styleSheet } from "../../../jss/pages/slide5";
import avatar from "../../../assets/avatar6.png";
import icon1 from "../../../assets/coin.png";
import CheckIcon from "@material-ui/icons/Check";
import InfoIcon from "@material-ui/icons/Info";

function Step6(props) {
  const { classes } = props;

  return (
    <div className={classes.subRoot}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={12} sm={10} md={6}>
          <Title>It was super easy Isn't it?</Title>
          <br />
          <Paragraph>
            You have amde it to final stage of AirLift onboarding, following are
            your account details and reward stats.
          </Paragraph>

          <br />
          <div className={classes.detailsCard}>
            <ul>
              <li>
                <ul>
                  <li>
                    <p>
                      <strong> 1,131,227 Followers: </strong> 2089.6 VBK
                    </p>
                    <p>
                      <strong> 871 Posts: </strong> 53.7 VBK
                    </p>
                    <p>
                      <strong> 1296 Days on twitter: </strong> <b> 207.2</b> VBK
                    </p>
                    <p>
                      <strong> Signup bonus: </strong>10.0 VBK
                    </p>
                    <p>
                      <strong> Total: </strong>2360.5 VBK
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>
                    <p>
                      <strong>Bitterex Link: </strong> 150%
                    </p>
                    <p>
                      <strong> First 2M Servers: </strong> 110%
                    </p>
                  </li>
                </ul>
              </li>
              <li className="userDetail">
                <ul>
                  <li>
                    <img src={icon1} alt="icon img" />
                    <p className="detailName">John Doe</p>
                    <Title className="detailAmount">3894.8 VBK</Title>
                    <p className="detailsUsername">@johndoe</p>
                    <p className="detailTwitter">
                      <CheckIcon classes={{ root: classes.checkIcon }} />{" "}
                      Twitter <InfoIcon classes={{ root: classes.infoIcon }} />
                    </p>
                    <p className="detailBittrex">
                      <CheckIcon classes={{ root: classes.checkIcon }} />
                      Bittrex
                      <InfoIcon classes={{ root: classes.infoIcon }} />
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <br />
          <br />
          <Button
            variant="contained"
            color="primary"
            onClick={props.handleNext}
          >
            Finish Onboarding
          </Button>
        </Grid>
        <Hidden smDown>
          <Grid item>
            <img src={avatar} alt="Side Avatar" />
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
}

export default withStyles(styleSheet, { name: "Step6" })(Step6);
