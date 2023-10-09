import { IPlayerState } from "@/app/types/player";
import { ITrack } from "@/app/types/track";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState: IPlayerState = {
    active: null,
    volume: 0,
    duration: 0,
    currentTime: 0,
    pause: true
}

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        setPlay: (state, action) => {
            state.pause = false
        },
        setPause: (state, action) => {
            state.pause = true
        },
        setActive: (state, action: PayloadAction<ITrack>) => {
            if(action.payload) {
                state.active = action.payload
            }
         },
        setDuration: (state, action: PayloadAction<number>) => {
            if(action.payload) {
                state.duration = action.payload
            }
         },
        setCurrentTime: (state, action: PayloadAction<number>) => {
            if(action.payload) {
                state.currentTime = action.payload
            }
         },
        setVolume: (state, action: PayloadAction<number>) => {
            if(action.payload) {
                state.volume = action.payload
            }
         },
    }
});

export const player = playerSlice.reducer;
export const actions = playerSlice.actions