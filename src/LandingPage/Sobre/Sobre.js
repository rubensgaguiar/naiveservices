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
    fontSize: "56px",
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
    height: 600,
    width: 400
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
        img: "/stitch.jpg",
        title: "Henrique Fernandes",
        linkedin: "https://www.linkedin.com/in/henriquefernandesa/",
        subtitle: [
          "Olá, me chamo Henrique e sou engenheiro \
        da computação no ITA. Sempre tive paixão por inovar\
        e experimentar novas tecnologias.", "Iniciei minha carreira\
        acadêmica adentrando em um grupo de pesquisa em robótica,\
        no qual participei de várias competições de cunho nacional\
        e internacional, tal como a Robocup.", "Após isso, comecei a\
        desenvolver projetos pessoais e adentrar no mundo profissional,\
        no qual acabei adentrando através da startup Quero Educação,\
        na qual tive experiência com Data Science, principalmente com\
         processamento de linguagem natural."
        ]
      },
      {
        img: "/mug.svg",
        title: "Coffee APPs",
        subtitle: [
          "A Coffee APPs é uma Software House que surgiu no alojamento\
          do Instituto Tecnológico de Aeronáutica (ITA).", "\
          Ela é formada por dois programadores apaixonados por inovar.\
          Assim, nós, entusiasmados por aplicar novas tecnologias no cotidiano,\
          construímos uma base forte e uma grande bagagem de projetos.",
          "Desse modo, nosso principal foco é utilizar esse conhecimento\
          em prol de proporcionar soluções tecnológicas para\
          pessoas físicas e jurídicas."
        ]
      },
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
          background: "#3df0b1",
          width: "100%",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <div className={classes.root} id="sobre">
          <Typography className={classes.title} align="center">
            Sobre Nós
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
