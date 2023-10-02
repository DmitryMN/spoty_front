'use client'

import { StepWrapper } from '@/app/components/StepWrapper';
import { Button, Container, Grid } from '@mui/material';
import React, { useState } from 'react';
import { CreateTrackForm } from '@/app/components/CreateTrackForm';
import { FileUpload } from '@/app/components/FileUpload';

const Page = () => {

  const [activeStep, setActiveStep] = useState(0);
  const [picture, setPicture] = useState(null);
  const [audio, setAudio] = useState(null)


  const next = () => {
    if (activeStep !== 2) {
      setActiveStep(prev => prev + 1)
    }
  }

  const back = () => {
    setActiveStep(prev => prev - 1)
  }

  return (
    <Container>
      <StepWrapper stepActive={activeStep}>
        {activeStep === 0 && <CreateTrackForm />}
        {activeStep === 1 &&
          <FileUpload accept='image/*' setFile={setPicture}>
            <Button variant='contained'>Download picture</Button>
          </FileUpload>}
        {activeStep === 2 &&
          <FileUpload accept='audio/*' setFile={setAudio}>
            <Button variant='contained'>Download audio</Button>
          </FileUpload>
        }
      </StepWrapper>
      <Grid container justifyContent='space-between'>
        <Button variant='contained' disabled={activeStep === 0} onClick={back}>Back</Button>
        <Button variant='contained' onClick={next}>Next</Button>
      </Grid>
    </Container>
  )
}

export default Page   