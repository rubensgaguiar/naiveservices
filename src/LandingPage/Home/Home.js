import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  root: {
    display: "flex",
    height: "100vh",
    alignItems: "center",
    paddingTop: "64px"
  },
  title: {
    fontSize: "56px",
    fontFamily: "lato",
    fontWeight: "bold",
  },
  text: {
    fontSize: "26px",
    fontFamily: "lato"
  },
  img: {
    width: "100%"
  }
});

class Home extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid
        container
        component="main"
        id="home"
        justify="space-evenly"
        className={classes.root}
        xs={12}
      >
        <CssBaseline />

        <Grid item >
          <Typography className={classes.title} align="center">
            Coffee APPs
          </Typography>
          <Typography className={classes.text} align="center">
            Tirando ideias do papel!
          </Typography>
        </Grid>
        <Grid item>
          <img className={classes.img} src={window.location.origin + "/app.svg"} />
        </Grid>
      </Grid>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
