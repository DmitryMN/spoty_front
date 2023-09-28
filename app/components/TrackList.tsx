import { FC } from 'react';
import { ITrack } from '../types/track';
import { Box, Grid } from '@mui/material';
import { TrackItem } from './TrackItem';

interface TrackListType {
    tracks: ITrack[]
}

export const TrackList: FC<TrackListType> = ({ tracks }) => {
    return (
        <Grid container direction='column'>
            <Box p={2}>
                {tracks.map((track) => <TrackItem key={track.id} track={track} />)}
            </Box>
        </Grid>
    )
}
