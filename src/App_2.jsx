import React from 'react';
import { useEffect, useState } from 'react';

let timerId
const Timer = ({ timeStart, step ,autostart}) => {
    const [time, setTime] = useState(timeStart);
    const [pause, setPause] = useState(false);

    useEffect(() => {
    
        if (!pause) {
            console.log("Таймер запущено!");
            timerId = setInterval(() => {
                setTime((prev) => {
                    if (prev > 0) {
                        console.log(`Залишилось часу: ${prev / 1000} сек`);
                        return prev - step
                    }
                     else {
                        console.log("Час вийшов");
                        return prev = timeStart;
                    }
                })
            }, step)
        } else {
            console.log("Таймер на паузі!")
            return clearInterval(timerId)
        }
      
    }, [pause])


    return (
        <div>
            <div>{`0${Math.floor(time / 1000 / 60)}`.slice(-2)}:{`0${time / 1000 % 60}`.slice(-2)}</div>
            <button onClick={() => setPause(false)}>Start</button>
            <button onClick={() => setPause(true)}>Stop</button>
            <button onClick={() => setTime(timeStart)}>Reset</button>
        </div>

    )
}

function App() {

    const timeStart_1 = 1000 * 10;
    const timeStart_2 = 1000 * 20;
    const step_1 = 1000
    const step_2 = 2000
     const autostart = true;
    return (
        <div className="App">
            <Timer timeStart={timeStart_1} step={step_1} autostart ={autostart} />
            <Timer timeStart={timeStart_2} step={step_2} autostart ={autostart} />
        </div>
    );
}

export default App;
