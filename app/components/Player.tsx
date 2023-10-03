'use client'

import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material';
import { Grid, IconButton } from '@mui/material';
import { FC, useState } from 'react';
import style from '../styles/Player.module.scss'
import { ITrack } from '../types/track';
import { TrackProgress } from './TrackProgress';


export const Player = () => {
    const track: ITrack = {
        id: 1,
        name: 'Track1',
        artist: 'Nirvana1',
        text: 'Come as you are',
        listens: 0,
        picture: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/attachment_53618706.png?auto=format&q=60&fit=max&w=930',
        audio: 'test',
        comments: []
    }

    const [active, setActive] = useState(false);

    return (
        <div className={style.player}>
            <IconButton onClick={(e) => e.stopPropagation()}>
                {
                    active ? <Pause /> : <PlayArrow />
                }
            </IconButton>
            <Grid className={style.player__text} container direction='column'>
                <div className={style.player__text_name}>{track.name}</div>
                <div className={style.player__text_artist}>{track.artist}</div>
            </Grid>
            <TrackProgress left={0} right={100} onChange={() => {}} />
            <VolumeUp style={{marginLeft: 'auto'}}/>
            <TrackProgress left={0} right={100} onChange={() => {}} />
        </div>
    )
}
