import { FC } from 'react';
import { ITrack } from '../types/track';
import { Card, Grid, IconButton } from '@mui/material';
import styles from '../styles/TrackItem.module.scss';
import { Delete, Pause, PlayArrow } from '@mui/icons-material';
import { useRouter } from 'next/navigation';


interface TrackItemProps {
    track: ITrack
    active?: boolean
}

export const TrackItem: FC<TrackItemProps> = ({ track, active = false }) => {
    const router = useRouter();

    return (
        <Card className={styles.track} onClick={() => router.push('/tracks/' + track.id)}>
            <IconButton onClick={(e) => e.stopPropagation()}>
                {
                    active ? <Pause /> : <PlayArrow />
                }
            </IconButton>
            <img className={styles.track_img} alt='track' src={track.picture} />
            <Grid className={styles.track__text} container direction='column'>
                <div className={styles.track__text_name}>{track.name}</div>
                <div className={styles.track__text_artist}>{track.artist}</div>
            </Grid>
            {active && <div>02:42 / 03:22</div>}
            <IconButton style={{ marginLeft: 'auto' }} onClick={(e) => e.stopPropagation()}><Delete /></IconButton>
        </Card>
    )
}
