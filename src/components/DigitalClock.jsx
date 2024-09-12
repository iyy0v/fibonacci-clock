
export default function DigitalClock({ time }) {
    return <div id="digital-clock">
        {
            time?.toLocaleTimeString(
                [],
                { hour: '2-digit', minute: '2-digit', hour12: true }
            ).replace(/ am| pm/, '')
        }
    </div>
}