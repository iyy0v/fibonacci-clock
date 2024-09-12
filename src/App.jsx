import { useState } from "react";
import Controls from './components/Controls';
import DigitalClock from "./components/DigitalClock";
import FibonacciClock from "./components/FibonacciClock";

export default function App() {
    const [time, setTime] = useState(new Date(0));

    return <div id="app">
        <Controls time={time} setTime={setTime} />

        <DigitalClock time={time} />

        <FibonacciClock time={time} />
    </div>
}