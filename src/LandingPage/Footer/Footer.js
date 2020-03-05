
import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
    root: {
        display: "flex",
        height: "15vh",
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

class Footer extends React.Component {
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
                    <a href="https://www.freepik.com/free-photos-vectors/app" style={{textDecoration: "none"}}>
                        <Typography className={classes.text} align="center" variant="h2">
                            Image App vector created by slidesgo - www.freepik.com
                        </Typography>
                    </a>
                    <a href="https://www.flaticon.com" style={{textDecoration: "none"}}>
                        <Typography className={classes.text} align="center" variant="h2">
                            Icons made by Pixel perfect from www.flaticon.com
                        </Typography>
                    </a>
                    <Typography className={classes.text} align="center" >
                        © Copyright 2020.
                    </Typography>
                </Grid>
            </Grid>
        );
    }
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
