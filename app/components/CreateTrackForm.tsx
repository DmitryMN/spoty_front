import { Grid, TextField } from '@mui/material'
import { FC } from 'react'

export const CreateTrackForm: FC = () => {
    return (
        <Grid container direction='column' style={{ padding: '20px' }}>
            <TextField label={'Track name'} style={{ margin: '5px 0px' }}></TextField>
            <TextField label={'Author name'} style={{ margin: '5px 0px' }}></TextField>
            <TextField label={'Track text'} multiline rows={3} style={{ margin: '5px 0px' }}></TextField>
        </Grid>
    )
}
