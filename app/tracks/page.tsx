'use client'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import { useRouter } from 'next/navigation';
import { ITrack } from '../types/track';
import { TrackList } from '../components/TrackList';

const Page = () => {

    const route = useRouter();
    const tracks: ITrack[] = [
        {
            id: 1,
            name: 'Track1',
            artist: 'Nirvana1',
            text: 'Come as you are',
            listens: 0,
            picture: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/attachment_53618706.png?auto=format&q=60&fit=max&w=930',
            audio: 'test',
            comments: []
        },
        {
            id: 2,
            name: 'Track2',
            artist: 'Nirvana2',
            text: 'Come as you are',
            listens: 0,
            picture: 'https://i0.wp.com/www.hireanillustrator.com/i/images/2018/02/CiddyFinal_HAI.jpg?fit=600%2C600&ssl=1',
            audio: 'test',
            comments: []
        },        {
            id: 3,
            name: 'Track3',
            artist: 'Nirvana3',
            text: 'Come as you are',
            listens: 0,
            picture: 'https://marketplace.canva.com/EAFkD109hh4/1/0/1600w/canva-modern-minimalist-graffiti-dream-music-album-cover-UFnhnxA5SRs.jpg',
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
                <TrackList tracks={tracks}/>
            </Card>
        </Grid>
    )
}

export default Page