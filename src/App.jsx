import React from 'react';
import Timer from './components/Timer';




 

function App() {

    const timeStart_1 = 1000 * 10;
    const timeStart_2 = 1000 * 20;
    const step_1 = 1000
    const step_2 = 2000
    const autostart = true;
    const infiniti = false;
    const onTick=(time) => console.log("Залишилось часу: " + time/1000)
    return (
        <div className="App">
            <Timer timeStart={timeStart_1} step={step_1} autostart ={autostart} onTick={onTick} infiniti={infiniti} />
            <Timer timeStart={timeStart_2} step={step_2} autostart ={autostart}  onTick={onTick}  infiniti={infiniti} />
        </div>
    );
}

export default App;
