'use client'

import { Pause, PlayArrow } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { FC, useState } from 'react';
import style from '../styles/Player.module.scss'


export const Player = () => {

    const [active, setActive] = useState(false);

    return (
        <div className={style.player}>
            <IconButton onClick={(e) => e.stopPropagation()}>
                {
                    active ? <Pause /> : <PlayArrow />
                }
            </IconButton>
        </div>
    )
}
