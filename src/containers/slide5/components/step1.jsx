import { Paragraph, Title, Button, TextField } from "../../../components";
import { Grid, withStyles, Hidden, InputAdornment } from "@material-ui/core";
import { styleSheet } from "../../../jss/pages/slide5";
import avatar from "../../../assets/avatar3.png";
import CheckIcon from "@material-ui/icons/Check";

function Step1(props) {
  const { classes } = props;

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        classes={{ root: classes.subRoot }}
      >
        <Grid item xs={12} sm={10} md={4}>
          <Title>Your voice, Your choice.</Title>
          <br />
          <Paragraph>
            Let's fet started and join the experiment. To reserve your account,
            please select your username.
          </Paragraph>

          <br />
          <TextField
            id="outlined-basic"
            variant="outlined"
            fullWidth
            inputLabel="username"
            endAdornment={
              <InputAdornment position="end">
                <CheckIcon />
              </InputAdornment>
            }
          />
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
      </Grid>
    </>
  );
}

export default withStyles(styleSheet, { name: "Step1" })(Step1);
