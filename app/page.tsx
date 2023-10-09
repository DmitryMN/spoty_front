'use client'
import { useAppDispatch, useAppSelector } from "./hooks/redux"
import { RootState } from "./store";
import { actions } from "./store/reducers/player-slice";


export default function Home() {

  const {volume} = useAppSelector((state: RootState) => state.player);
  const dispatch = useAppDispatch();
  const { setVolume } = actions;

  const changeVolume = () => {
    dispatch(setVolume(5))
  }

  return (
    <main>
      <div>Volume: {volume}</div>
      <button onClick={changeVolume}>+</button>
    </main>
  )
}
