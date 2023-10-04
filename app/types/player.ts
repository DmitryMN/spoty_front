import { ITrack } from "./track";
import { playActions } from "../store/action-creators/playActions";

export interface IPlayerState {
    active: null | ITrack,
    volume: number,
    duration: number,
    currentTime: number,
    pause: boolean
}

export enum PlayerActionTypes {
    PLAY = 'PLAY',
    PAUSE = 'PAUSE',
    SET_ACTIVE = 'SET_ACTIVE',
    SET_DURATION = 'SET_DURATION',
    SET_CURRENT_TIME = 'SET_CURRENT_TIME',
    SET_VOLUME = 'SET_VOLUME',
}

export type PlayerAction = ReturnType<typeof playActions.setPlay>
    | ReturnType<typeof playActions.setPause>
    | ReturnType<typeof playActions.setActive>
    | ReturnType<typeof playActions.setDuration>
    | ReturnType<typeof playActions.setCurrentTime>
    | ReturnType<typeof playActions.setVolume>