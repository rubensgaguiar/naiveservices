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
    backgroundColor: "#CD5C5C"
  },
  title: {
    fontSize: "26px",
    fontFamily: "lato",
    fontWeight: "bold",
    color: "white"
  },
  text: {
    fontSize: "16px",
    fontFamily: "lato",
    color: "white"
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
            Quando quiser, fale conosco!
          </Typography>
          <br />
            <a href="https://wa.me/5512997847924" style={{textDecoration: "none"}}>
              <Typography className={classes.text} align="center">
                Whatsapp: (12) 99784-7924
              </Typography>
            </a>
            <Typography className={classes.text} align="center">
            Email: coffeeappsita@gmail.com
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
