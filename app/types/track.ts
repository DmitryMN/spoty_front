
export interface IComment {
    id: number
    username: string
    text: string
    trackId: number
    track: ITrack
}

export interface ITrack {
    id: number
    name: string
    artist: string
    text: string
    listens: number
    picture: string
    audio: string
    comments: IComment[]
}