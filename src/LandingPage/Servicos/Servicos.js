import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ServicosCard from "./ServicosCard";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    minHeight: "100vh",
    margin: 32,
  },
  title: {
    fontSize: "56px",
    fontFamily: "lato",
    fontWeight: "bold",
    color: "#1D2A30"
  },
  text: {
    fontSize: "20px",
    fontFamily: "lato",
    display: "flex",
    justifyContent: "center",
    color: "#1D2A30"
  },
  img: {
    width: "100%"
  },
  card: {
    marginTop: 8,
    marginBottom: 8,
    height: 196,
    width: 256
  },
  description: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  }
});

class Servicos extends React.Component {
  render() {
    const { classes } = this.props;

    const DataCard = [
      {
        img: "/location.svg",
        title: "Aplicativos",
        subtitle: "Criação de aplicativos para Android, IPhone e Web."
      },
      {
        img: "/data.svg",
        title: "Automatizações",
        subtitle: "Automatização de processos computacionais."
      },
      {
        img: "/manage.svg",
        title: "Ciência de Dados",
        subtitle:
          "Tratamento de dados com Machine Learning e criação de Scrappers para obtenção de dados."
      },
      {
        img: "/toy.svg",
        title: "Inteligência Artificial",
        subtitle:
          "Criação de algoritmos de: visão computacional, reconhecimento de voz, otimização e chatbots."
      }
    ];

    return (
      <div style={{ width: "100%" }}>
        <div className={classes.root} id="servicos">
          <div>
            <Grid container display="flex" alignItems="center" justify="center">
              <Grid className={classes.card} item>
                <ServicosCard {...DataCard[0]} />
              </Grid>
            </Grid>
            <Grid
              container
              display="flex"
              alignItems="center"
              justify="space-evenly"
              style={{marginBottom: 8}}
            >
              <Grid className={classes.card} item>
                <ServicosCard {...DataCard[1]} />
              </Grid>
              <Grid item justify="center" alignItems="center">
                <Typography className={classes.title}>Serviços</Typography>
              </Grid>
              <Grid className={classes.card} item>
                <ServicosCard {...DataCard[2]} />
              </Grid>
            </Grid>
            <Grid container display="flex" alignItems="center" justify="center">
              <Grid className={classes.card} item>
                <ServicosCard {...DataCard[3]} />
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

Servicos.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Servicos);
