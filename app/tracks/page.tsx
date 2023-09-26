'use client'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import { useRouter } from 'next/navigation';
import { ITrack } from '../types/track';

const Page = () => {

    const route = useRouter();
    const tracks: ITrack[] = [
        {
            id: 1,
            name: 'Track1',
            artist: 'Nirvana1',
            text: 'Come as you are',
            listens: 0,
            picture: 'test',
            audio: 'test',
            comments: []
        },
        {
            id: 2,
            name: 'Track2',
            artist: 'Nirvana2',
            text: 'Come as you are',
            listens: 0,
            picture: 'test',
            audio: 'test',
            comments: []
        },        {
            id: 3,
            name: 'Track3',
            artist: 'Nirvana3',
            text: 'Come as you are',
            listens: 0,
            picture: 'test',
            audio: 'test',
            comments: []
        },
    ]

    return (
        <Grid container justifyContent='center'>
            <Card style={{ width: '900px' }}>
                <Box p={5}>
                    <Grid container justifyContent='space-between'>
                        <h1>Список треков</h1>
                        <Button onClick={() => route.push('/tracks/create')}>Загрузить</Button>
                    </Grid>
                </Box>
            </Card>
        </Grid>
    )
}

export default Page