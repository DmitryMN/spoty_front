import { Card, Container, Grid, Step, StepLabel, Stepper } from "@mui/material";
import { FC } from "react";

interface StepWrapperProps {
    stepActive: number;
    children?: React.ReactNode
}

const steps = ['Track information', 'Album picture', 'Download track'];

export const StepWrapper: FC<StepWrapperProps> = ({ stepActive, children }) => {
    return (
        <Container>
            <Stepper activeStep={stepActive}>
                {steps.map((step, index) => (
                    <Step key={index} completed={stepActive > index}>
                        <StepLabel>{step}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <Grid container justifyContent='center' style={{margin: '70px 0', height: '270px'}}>
                <Card style={{width: '600px'}}>
                    {children}
                </Card>
            </Grid>
        </Container>
    )
}
