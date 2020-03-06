import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  root: {
    display: "flex",
    height: "30vh",
    alignItems: "center",
    backgroundColor: "#0CDCC4"
  },
  title: {
    fontSize: "26px",
    fontFamily: "lato",
    fontWeight: "bold",
    color: "#2E4E54"
  },
  text: {
    fontSize: "16px",
    fontFamily: "lato",
    color: "#2E4E54"
  }
});

class Home extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid
        container
        component="main"
        id="contato"
        className={classes.root}
        xs={12}
      >
        <CssBaseline />
        <Grid item xs={12}>
          <Typography className={classes.title} align="center">
            Contato
          </Typography>
          <Typography className={classes.text} align="center" variant="h2">
            Quando quiser, fale comigo!
          </Typography>
          <br />
            <a href="https://wa.me/5512997847924" style={{textDecoration: "none"}}>
              <Typography className={classes.text} align="center">
                Whatsapp: (12) 99784-7924
              </Typography>
            </a>
            <Typography className={classes.text} align="center">
            Email: rubens.miguek@gmail.com
            </Typography>
        </Grid>
      </Grid>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
