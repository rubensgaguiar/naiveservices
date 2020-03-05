import React from "react"; // eslint-disable-next-line
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import ImageStepper from "./ImageStepper";
import ImageView from "./ImageView";
import styled from "styled-components";
import Fab from "@material-ui/core/Fab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";

const StyledCard = styled(Card)``;

const StyledCardMedia = styled(CardMedia)`
  height: 355px;
`;

export default class MediaCard extends React.Component {
  constructor() {
    super();
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.handleClickOpenImage = this.handleClickOpenImage.bind(this);
    this.handleCloseImage = this.handleCloseImage.bind(this);


    this.state = {
      open: false,
      open_image: false
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleClickOpenImage = () => {
    this.setState({ open_image: true });
  };

  handleCloseImage = () => {
    this.setState({ open_image: false });
  };

  render() {
    return (
      <StyledCard>
        <CardActionArea onClick={this.handleClickOpenImage}>
          <ImageStepper tutorialSteps={this.props.imgs}/>
        </CardActionArea>
        <CardActionArea onClick={this.handleClickOpen}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {this.props.subtitle}
            </Typography>
            <br />
            <Button
              size="small"
              color="inherit"
              style={{ position: "absolute", right: 8, bottom: 8 }}
            >
              <ExpandMoreIcon />
            </Button>
          </CardContent>
        </CardActionArea>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{this.props.title}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {this.props.description.map(data => (
                <Typography>{data}</Typography>
              ))}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Fechar
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={this.state.open_image}
          onClose={this.handleCloseImage}
          maxWidth
          fullWidth
          aria-labelledby="max-width-dialog-title"
        >
          <DialogContent>
             <ImageView tutorialSteps={this.props.imgs} />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCloseImage} color="primary">
              Fechar
            </Button>
          </DialogActions>
        </Dialog>
      </StyledCard>
    );
  }
}
