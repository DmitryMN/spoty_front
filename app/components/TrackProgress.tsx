import { FC } from 'react';

interface TrackProgressProps {
    left: number
    right: number
    onChange: (e: any) => void
}


export const TrackProgress: FC<TrackProgressProps> = ({left, right, onChange}) => {

    return (
        <div style={{display: 'flex'}}>
            <input type="range" min={left} max={right} value={left} onChange={onChange}/>
            <div>{left}/{right}</div>
        </div>
    )
}
