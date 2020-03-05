import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';


const useStyles = makeStyles(theme => ({
    root: {
        // maxWidth: 400,
        width: "100%",
        flexGrow: 1,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        backgroundColor: theme.palette.background.default,
    },
    img: {
        maxHeight: "70vh",
        display: 'block',
        overflow: 'hidden',
        width: '100%',
    },
}));

function SwipeableTextMobileStepper(tutorialSteps) {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    tutorialSteps = tutorialSteps.tutorialSteps;
    const maxSteps = tutorialSteps.length;

    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    const handleStepChange = step => {
        setActiveStep(step);
    };

    return (
        <div className={classes.root}>
            <Paper square elevation={0} className={classes.header}>
                <Typography>{tutorialSteps[activeStep].label}</Typography>
            </Paper>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {tutorialSteps.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <img className={classes.img} src={window.location.origin + step.imgPath} alt={step.label} />
                        ) : null}
                    </div>
                ))}
            </SwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position="static"
                variant="text"
                activeStep={activeStep}
                nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                        Next
                        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                        Back
                    </Button>
                }
            />
        </div>
    );
}

export default SwipeableTextMobileStepper;
