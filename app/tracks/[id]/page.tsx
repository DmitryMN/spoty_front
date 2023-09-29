'use client'
import { IComment, ITrack } from '@/app/types/track';
import { Button, Grid, TextField } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react'



const Page = () => {

    const roter = useRouter();

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

    return (
        <div>
            <Button variant='outlined' onClick={() => roter.push('/tracks')}>Back lists</Button>
            <Grid container style={{margin: '20px 0'}}>
                <img alt='this page' src={track.picture} style={{width: '200px', height: '200px'}}/>
                <div style={{marginLeft: '30px'}}>
                    <h1>Track name: {track.name}</h1>
                    <h1>Artist: {track.artist}</h1>
                    <h1>Listens: {track.listens}</h1>
                </div>
            </Grid>
            <h1>Words in the song:</h1>
            <p>{track.text}</p>
            <h3>Comments:</h3>
            <Grid container>
                <TextField label='your name' fullWidth></TextField>
                <TextField label='your comment' fullWidth multiline rows={4}></TextField>
                <Button variant='outlined'>Send</Button>
            </Grid>
            <div>
                {track.comments.map((com) => <div>
                    <div>Author - {com.username}</div>
                    <div>Comment - {com.text}</div>
                </div>)}
            </div>
        </div>
    )
}

export default Page;