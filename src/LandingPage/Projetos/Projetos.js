import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import MediaCard from "../Servicos/ServicosCard";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    minHeight: "130vh",
    maxWidth: "80vw",
    paddingBottom: "16px",
    margin: 16
  },
  title: {
    fontSize: "48px",
    fontFamily: "lato",
    fontWeight: "bold",
    paddingTop: "16px",
    paddingBottom: "16px",
    color: "#F5F5F5"
  },
  text: {
    fontSize: "20px",
    fontFamily: "lato",
    display: "flex",
    justifyContent: "center"
  },
  img: {
    width: "100%"
  },
  description: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  card: {
    margin: 8,
    height: 196,
    width: 400
  },
});

class Projetos extends React.Component {
  render() {
    const { classes } = this.props;

    const DataCard = [
      {
        img: "/vision.svg",
        title: "Visão Computacional",
        subtitle:
            "Algoritmo para ler informações de CNHs."
      },
      {
        img: "/vision.svg",
        title: "Visão Computacional",
        subtitle:
            "Reconhecimento de objetos ou pessoas."
      },
      {
        img: "/manage.svg",
        title: "Ciência de Dados",
        subtitle:
            "Pré-processamento de dados."
      },
      {
        img: "/manage.svg",
        title: "Ciência de Dados",
        subtitle:
            "Modelagem de problemas que envolvam análise de dados."
      },
      {
        img: "/manage.svg",
        title: "Ciência de Dados",
        subtitle:
            "Criação de gráficos interativos."
      },
      {
        img: "/manage.svg",
        title: "Ciência de Dados",
        subtitle:
            "Gerar conclusões e insights a partir de dados."
      },
      {
        img: "/audio-book.svg",
        title: "Processamento de Linguagem",
        subtitle:
            "Reconhecimento de informações e intenções em um texto."
      },
      {
        img: "/audio-book.svg",
        title: "Processamento de Linguagem",
        subtitle:
            "Geração de textos e relatórios a partir de informações estruturadas."
      },
      {
        img: "/audio-book.svg",
        title: "Processamento de Linguagem",
        subtitle:
            "Reconhecimento e transcrição de voz."
      },
      {
        img: "/data.svg",
        title: "Automatização de Processos",
        subtitle:
            "Burlar captchas."
      },
      {
        img: "/data.svg",
        title: "Automatização de Processos",
        subtitle:
            "Extrair informações de páginas da web."
      },
      {
        img: "/data.svg",
        title: "Automatização de Processos",
        subtitle:
            "Automatizar a integração de informações estruturadas de diferentes sistemas."
      },
    ];

    return (
      <div
        style={{
          background: "#1D2A30",
          width: "100%",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <div className={classes.root} id="projetos">
          <Grid container justify="center" alignItems="center">
            <Typography className={classes.title}>Projetos</Typography>
          </Grid>
          <Grid
            container
            display="flex"
            alignItems="center"
            justify="space-evenly"
          >
            {DataCard.map(data => (
              <Grid className={classes.card} item>
                <MediaCard {...data} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    );
  }
}

Projetos.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Projetos);
