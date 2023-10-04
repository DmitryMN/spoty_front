import { PlayerActionTypes } from "@/app/types/player"
import { ITrack } from "@/app/types/track"

export const playActions = {
    setPlay: () => ({ type: PlayerActionTypes.PLAY } as const),
    setPause: () => ({ type: PlayerActionTypes.PAUSE } as const),
    setActive: (active: ITrack) => ({ type: PlayerActionTypes.SET_ACTIVE, payload: active } as const),
    setDuration: (duration: number) => ({ type: PlayerActionTypes.SET_DURATION, payload: duration } as const),
    setCurrentTime: (time: number) => ({ type: PlayerActionTypes.SET_CURRENT_TIME, payload: time } as const),
    setVolume: (volume: number) => ({ type: PlayerActionTypes.SET_VOLUME, payload: volume } as const),
}