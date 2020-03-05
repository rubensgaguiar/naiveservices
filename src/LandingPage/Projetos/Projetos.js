import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import MediaCard from "./Card/Card";
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
    fontSize: "56px",
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
  card: {
    width: "400px",
    padding: "10px 0px 10px"
  },
  description: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  }
});

class Projetos extends React.Component {
  render() {
    const { classes } = this.props;

    const DataCard = [
      {
        imgs: [
          {
            label: "Tela de Login",
            imgPath: "/chain.svg"
          },
          {
            label: "Tela de Sign Up",
            imgPath: "/chain2.svg"
          },
          {
            label: "Tela de Chat",
            imgPath: "/chain1.svg"
          }
        ],
        title: "Aplicativo",
        subtitle: "Chatbot para Android, IPhone e Web.\
        ",
        description: [
          "Chatbot com sistema de login, cadastro e comunicação com uma API feita em Python que executava toda a lógica para gerar uma resposta ao usuário. Este aplicativo foi desenvolvido para Android, IPhone e Web."
        ]
      },
      {
        imgs: [
          {
            label: "Home dos Vídeos",
            imgPath: "/inova1.svg"
          },
          {
            label: "Tela de Exibição",
            imgPath: "/inova2.svg"
          },
          {
            label: "Vídeos Recomendados",
            imgPath: "/inova3.svg"
          }
        ],
        title: "Aplicativo",
        subtitle: "Aplicação Web de vídeos no modelo do Netflix.",
        description: [
          "Aplicação Web com sistema de login, cadastro, exibição de vídeos e upload de vídeos. Nesta aplicação o dono da página realizava upload dos vídeos para os assinantes da plataforma."
        ]
      },
      {
        imgs: [
          {
            label: "",
            imgPath: "/manage.svg"
          }
        ],
        title: "Ciência de Dados",
        subtitle: "Machine learning para resolver desafios.",
        description: [
          "Pre-processamentos de dados.",
          "Modelagem de problemas que envolvam análise de dados.",
          "Criação de gráficos interativos.",
          "Geração de conclusões e insights a partir dos dados."
        ]
      },
      {
        imgs: [
          {
            label: "",
            imgPath: "/audio-book.svg"
          }
        ],
        title: "Processamento de Linguagem",
        subtitle: "Uso de IA para entender e compor informações.",
        description: [
          "Reconhecimento de informações e intenções no texto.",
          "Filtragem de textos.",
          "Geração de textos e relatórios a partir de informações.",
          "Reconhecimento e transcrição de voz."
        ]
      },
      {
        imgs: [
          {
            label: "",
            imgPath: "/vision.svg"
          }
        ],
        title: "Visão Computacional",
        subtitle: "Obter informação de imagens ou vídeos.",
        description: [
          "Algoritmo para tirar informações de CNHs.",
          "Reconhecimento de objetos ou pessoas do mundo real."
        ]
      },
      {
        imgs: [
          {
            label: "",
            imgPath: "/data.svg"
          }
        ],
        title: "Automatização de Processos",
        subtitle: "Web scrapping, sistemas operacionais e APIs",
        description: [
          "Burlar captchas.",
          "Extrair informações de páginas web.",
          "Configurar projetos em sistemas operacionais.",
          "Fazer testes estatísticos de performace.",
          "Automatizar tarefas manuais."
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
