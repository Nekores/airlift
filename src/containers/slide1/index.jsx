import "../../pages/App";
import { Button, Paragraph, Title } from "../../components";
import StatusLoader from "../../components/StatusLoader";
import { Grid, Container, withStyles, Hidden } from "@material-ui/core";
import { useEffect, useState } from "react";
import CheckIcon from "@material-ui/icons/Check";
import { Link } from "react-router-dom";
import avatar1 from "../../assets/avatar1.png";
import { styleSheet } from "../../jss/pages/slide1";

function Slide1(props) {
  const [pluginStatus, setPluginStatus] = useState(false);
  const [isPlugin, setIsPlugin] = useState(false);
  const { classes } = props;

  useEffect(() => {
    setTimeout(() => setPluginStatus(true), 3000);
    if (pluginStatus) {
      setTimeout(() => setIsPlugin(true), 3000);
    }
  });

  return (
    <div className="content-area">
      <Container>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          className={isPlugin && classes.root}
        >
          <Grid item xs={12} sm={10} md={4}>
            <Title color="purple">Install AirLift to get coins</Title>
            <br />
            <Paragraph>
              In order to reserve your username and collect coin you have to
              install AirLift plugin.
            </Paragraph>

            {pluginStatus ? (
              !isPlugin && (
                <>
                  <br />
                  <StatusLoader
                    statusText="Plugin Installed...."
                    icon={<CheckIcon />}
                  />
                </>
              )
            ) : (
              <>
                <br />
                <StatusLoader statusText="Checking for plugin...." />
                <br />
                <Button> Download</Button>
              </>
            )}
            {isPlugin ? (
              <>
                <br />
                <Link to="/get-started">
                  <Button> Get Started</Button>
                </Link>
              </>
            ) : null}
          </Grid>
          <Hidden smDown>
            <Grid item>
              {!isPlugin ? <img src={avatar1} alt="avatar" /> : null}
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </div>
  );
}

export default withStyles(styleSheet, { name: "Slide1" })(Slide1);
