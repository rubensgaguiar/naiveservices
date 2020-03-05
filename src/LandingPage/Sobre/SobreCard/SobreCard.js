import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    height: "100%"
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  img: {
    height: "180px",
    width: "180px",
    borderRadius: "50%",
    paddingBottom: "8px"
  },
  linkedin: {
    height: "24px"
  },
  title: {
    fontSize: 18
  },
  subtitle: {
    textAlign: "justify",
    fontSize: 14
  }
});

export default function SimpleCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <img className={classes.img} src={window.location.origin + props.img} />
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {props.title}
        </Typography>
        <Typography className={classes.subtitle} variant="body2" component="p">
          {props.subtitle.map(data => (
            <Typography variant="p">{data}<br /><br /></Typography>
          ))}
        </Typography>
        {
          props.linkedin ? 
        (
          <a href={props.linkedin}>
            <img className={classes.linkedin} src={window.location.origin + "/linkedin.png"} />
          </a>
        ) 
        : 
        <div></div>
        }

      </CardContent>
    </Card>
  );
}
