import React from "react";
import Grid from "@material-ui/core/Grid";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import Home from "./Home/Home.js";
import AppBar from "./NavBar/NavBar.js";
import Projetos from "./Projetos/Projetos";
import Contato from "./Contato/Contato";
import Sobre from "./Sobre/Sobre";
import styled from "styled-components";
import * as Scroll from "react-scroll"; // eslint-disable-next-line
import Toolbar from "@material-ui/core/Toolbar";
import Servicos from "./Servicos/Servicos";
import Footer from "./Footer/Footer";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "Nunito",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif"
    ].join(",")
  },
  palette: {
    primary: {
      main: "#1D2A30"
    },
    secondary: {
      main: "#0CDCC4"
    }
  }
});

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.scrollProjetos = React.createRef();
    this.handler = this.handler.bind(this);
  }

  handler(id) {
    if (id === "HOME") {
      var Scroll = require("react-scroll");
      var scroll = Scroll.animateScroll;
      scroll.scrollToTop({ smooth: true, duration: "1500", delay: "500" });
    }
  }

  render() {
    return (
      <Grid container justify="center">
        <ThemeProvider theme={theme}>
          <AppBar handler={this.handler} />
          <Home />
          <Sobre />
          <Servicos />
          <Projetos />
          <Contato />
          <Footer />
        </ThemeProvider>
      </Grid>
    );
  }
}

export default LandingPage;
