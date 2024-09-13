import { useEffect, useState } from "react";

export default function FibonacciClock({ time }) {

    // Extract hours number
    let hours = Number.parseInt(
        time?.toLocaleTimeString(
            [],
            { hour: '2-digit', hour12: true}).replace(/ am| pm/, ''
        )
    )

    // Extract minutes number
    let minutes = Number.parseInt(
        time?.toLocaleTimeString(
            [],
            { minute: '2-digit', hour12: false}
        )
    )

    // Used to mark which tiles are colored
    const [hourTiles, setHourTiles] = useState([1,1,2,3,5])
    const [minTiles, setMinTiles] = useState([1,1,2,3,5])

    // Determinate which tiles will be used
    function calculateTiles(number) {
        const tiles = [1,1,2,3,5]
        let n = number
        let t = new Array(...tiles)
        for(let i=t.length-1; i>= 0; i--) {
            console.log(`${n} - ${t[i]}`)
            if(n >= t[i]) {
                n -= t[i]
                t[i] = 0
            }
        }
        return t
    }


    useEffect(() => {
        if(time) {  // Recalculate each time the Time is updated/changed
            setHourTiles(calculateTiles(hours, hourTiles, setHourTiles))
            setMinTiles(calculateTiles(minutes/5, minTiles, setMinTiles))
        }
    }, [time])


    return <div id="fibonacci-clock">
        {[1,1,2,3,5].map((value, i) => (
            <div id={`tile${i + 1}`} className={"tiles " + ((hourTiles[i] === 0 && minTiles[i] === 0) ? "blue" : (hourTiles[i] === 0 && "red") || (minTiles[i] === 0 && "green") || "")}>
                {value}
            </div>
        ))}
    </div>
}