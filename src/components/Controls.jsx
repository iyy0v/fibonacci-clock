
export default function DigitalClock({ time, setTime }) {

    // Number of minutes to be incremented/decremented by on each click
    const MINUTES = 5;

    function incMinutes() {
        const newTime = new Date(time.setMinutes(time.getMinutes() + MINUTES));
        setTime(newTime);
    }

    function decMinutes() {
        const newTime = new Date(time.setMinutes(time.getMinutes() - MINUTES));
        setTime(newTime);
    }

    return <div id="controls">
        <button onClick={decMinutes}>Back</button>
        <button onClick={incMinutes}>Next</button>
    </div>
}