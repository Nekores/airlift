import "../../pages/App";
import { Title } from "../../components";
import { Grid, Container, withStyles } from "@material-ui/core";
import { styleSheet } from "../../jss/pages/slide2";
import React, { useRef, useState } from "react";
import cursor from "../../assets/cursor.png";
import { Link } from "react-router-dom";

function Slide2(props) {
  const { classes } = props;
  const [style, setStyle] = useState(null);
  const getCursor = useRef(0);

  return (
    <div
      className={classes.root}
      onMouseMove={({ pageX, pageY }) =>
        setStyle({
          left: pageX - 50 + "px",
          top: pageY - 50 + "px",
          display: "block",
        })
      }
    >
      <div className="overlay">
        <div className="circular-cursor" ref={getCursor} style={style}>
          <Link to="/welcome">
            <img src={cursor} alt="cursor-img" />
          </Link>
        </div>
        <Container>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <Title color="purple">
                Lovely to have you with us! <br />
                Make yourself comfortable.
                <br />
                Put on some headphones and
                <br />
                Set them at a pleasant volume.
                <br />
                Sit back, relax, nand enjoy.
              </Title>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default withStyles(styleSheet, { name: "Slide2" })(Slide2);
