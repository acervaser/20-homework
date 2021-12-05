import React from "react";
import { useEffect, useState } from 'react';
const Timer = ({ timeStart, step, onTick, autostart, infiniti }) => {
    const [time, setTime] = useState(timeStart);
    const [pause, setPause] = useState(!autostart);
    const [repetition, setRepetition] = useState(infiniti);

    const handleResetTimer = () => {
        setPause(!autostart)
        setTime(timeStart);
    }

    const handleRepeatTimer = () => {
        if (repetition) {
            setRepetition(false)
            setTime(timeStart)
            setPause(false)

        } else {
            setRepetition(true)
            setTime(timeStart);
            setPause(false)
        }
    };

    useEffect(() => {
        if (repetition) {
            if (!pause) {
                const interval = setInterval(() => {
                    setTime((prev) => {
                        if (prev > 0) {
                            return prev - step
                        } else {
                            return prev = timeStart;
                        }
                    })
                    onTick(time)
                }, step)

                return () => clearInterval(interval)
            }

        } else {
            if (!pause) {
                const interval = setInterval(() => {
                    setTime((prev) => prev - step)
                    onTick(time)
                }, step)
                if (time === 0) {
                    setPause(true)
                }
                return () => clearInterval(interval)
            }

        }
    }, [time, pause, repetition])



    return (
        <div>

            <div>
                <p>{repetition && "Infiniti mod on"}</p>
                {`0${Math.floor(time / 1000 / 60)}`.slice(-2)}:{`0${time / 1000 % 60}`.slice(-2)}
            </div>
            <button onClick={() => setPause(false)}>Start</button>
            <button onClick={() => setPause(true)}>Stop</button>
            <button onClick={handleResetTimer}>Reset</button>
            <button onClick={handleRepeatTimer}>Repeat on/off</button>
        </div>

    )
}

export default Timer