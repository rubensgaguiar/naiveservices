import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import LocalCafeIcon from "@material-ui/icons/LocalCafe";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu"
import InputBase from "@material-ui/core/InputBase";
import { Link, animateScroll as scroll } from "react-scroll";
import Hidden from "@material-ui/core/Hidden";
import {Menu} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    fontFamily: "lato"
  },
  appBar: {
    display: "flex",
    justifyContent: "center",
    height: "70px"
  },
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    width: "1366px"
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
  /*search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }*/
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();

  const homeButton = (
      <Grid item>
        <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >
          <Button color="inherit">Home</Button>
        </Link>
      </Grid>
  );

  const sobreButton = (
      <Grid item>
        <Link
            activeClass="active"
            to="sobre"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >
          <Button color="inherit">Sobre</Button>
        </Link>
      </Grid>
  );

  const servicosButton = (
      <Grid item>
        <Link
            activeClass="active"
            to="servicos"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >
          <Button color="inherit">Serviços</Button>
        </Link>
      </Grid>
  );

  const projetosButton = (
      <Grid item>
        <Link
            activeClass="active"
            to="projetos"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >
          <Button color="inherit">Projetos</Button>
        </Link>
      </Grid>
  );

  const contatoButton = (
      <Grid item>
        <Link
            activeClass="active"
            to="contato"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >
          <Button color="inherit">Contato</Button>
        </Link>
      </Grid>
  );

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed" color="secondary">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Toolbar className={classes.topBar}>
            <Grid item style={{ display: "flex", alignItems: "center" }}>
              <img
                src={window.location.origin + "/workplace.svg"}
                height="64px"
              />
            </Grid>
            <Hidden xsDown>
              <Grid className={classes.buttons} item>
                {homeButton}
                {sobreButton}
                {servicosButton}
                {projetosButton}
                {contatoButton}
              </Grid>
            </Hidden>
              <Hidden smUp>
                  <Button
                      aria-controls="customized-menu"
                      aria-haspopup="true"
                      variant="contained"
                      color="secondary"
                      onClick={handleClick}
                  >
                      <MenuIcon/>
                  </Button>
                  <Menu
                      id="customized-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose} >
                      {homeButton}
                      {sobreButton}
                      {servicosButton}
                      {projetosButton}
                      {contatoButton}
                  </Menu>
              </Hidden>
          </Toolbar>
        </div>
      </AppBar>
    </div>
  );
}
