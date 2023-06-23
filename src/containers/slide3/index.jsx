import { Paragraph, Title } from "../../components";
import { Grid, Container, withStyles } from "@material-ui/core";
import { styleSheet } from "../../jss/pages/slide3";
import logo from "../../assets/avatar.png";
import { useEffect, useState } from "react";
// import { Button, Paragraph, Title } from "../../components";
import { useHistory } from "react-router-dom";

function Slide3(props) {
  const { classes } = props;
  const history = useHistory();

  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 99 ? history.push("/demo") : prevProgress + 3
      );
    }, 150);
    return () => {
      clearInterval(timer);
      console.log(1);
    };
  });
  return (
    <div className={classes.root}>
      <div className="overlay">
        <Container>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <img src={logo} className="avatar" alt="avatar" />
              <div className={classes.bottomPart}>
                <Paragraph>
                  Change is coming, <br /> Whether you like it or not.
                </Paragraph>
                <Title color="purple">{progress}%</Title>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default withStyles(styleSheet, { name: "Slide3" })(Slide3);
