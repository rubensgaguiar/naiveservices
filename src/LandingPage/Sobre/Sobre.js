import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import SobreCard from "./SobreCard/SobreCard";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    minHeight: "100vh",
    width: "100vw",
    margin: 32
  },
  title: {
    fontSize: "48px",
    fontFamily: "lato",
    fontWeight: "bold",
    color: "#F5F5F5"
  },
  text: {
    fontSize: "20px",
    fontFamily: "lato",
    display: "flex",
    justifyContent: "center",
    color: "#1D2A30"
  },
  img: {
    width: "180px",
    height: "180px",
    borderRadius: "50%"
  },
  card: {
    paddingBottom: "8px",
    paddingTop: "8px",
    height: 700,
    width: 500
  },
  description: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  }
});

class Sobre extends React.Component {
  render() {
    const { classes } = this.props;

    const DataCard = [
      {
        img: "/rubs.jpg",
        title: "Rubens Aguiar",
        linkedin: "https://www.linkedin.com/in/rubensmgaguiar/",
        subtitle: [
          "Olá, me chamo Rubens e sou estudante de engenharia no ITA. Aqui no instituto, participei de um conceituado grupo pesquisas em robótica com premiações mundiais: onde desenvolvi pesquisas em Inteligência Artificial.", "Não somente, estagiei\
          como Software Engineer na QuintoAndar, uma grande startup\
          brasileira, e como Data Scientist na Up.p uma fintech pioneira\
          no empréstimo entre pessoas.", "Simultâneamente, trabalhei\
          em outros projetos como: criar uma plataforma\
          com vídeos sobre educação empreendedora e criar uma assistente virtual\
          para ajudar pequenos negócios. Atualmente, desenvolvo Apps e produtos com inteligência artificial."
        ]
      }
    ];
    return (
      <div
        style={{
          background: "#2E4E54",
          width: "100%",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <div className={classes.root} id="sobre">
          <Typography className={classes.title} align="center">
            Sobre
          </Typography>
          <Grid
            container
            display="flex"
            alignItems="center"
            justify="space-evenly"
          >
            {DataCard.map(data => (
              <Grid className={classes.card} item>
                <SobreCard {...data} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    );
  }
}

Sobre.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Sobre);
