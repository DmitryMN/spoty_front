import { IPlayerState } from "@/app/types/player";
import { createSlice } from "@reduxjs/toolkit";


const initialState: IPlayerState = {
    active: null,
    volume: 0,
    duration: 0,
    currentTime: 0,
    pause: true
}

export const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        
    }
})