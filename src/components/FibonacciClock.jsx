import {useEffect, useState} from "react";

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

    useEffect(() => {
        console.log("tiles " + ((hourTiles[0] === 0 && minTiles[0] === 0) ? "blue" : (hourTiles[0] === 0 && "red") || (minTiles[0] === 0 && "green") || ""))
    }, [hourTiles, minTiles]);


    return <div id="fibonacci-clock">
        {`${hourTiles} : ${minTiles}`}
        <div className={"tiles " + ((hourTiles[0] === 0 && minTiles[0] === 0) ? "blue" : (hourTiles[0] === 0 && "red") || (minTiles[0] === 0 && "green") || "")}>1</div>
        <div className={"tiles " + ((hourTiles[1] === 0 && minTiles[1] === 0) ? "blue" : (hourTiles[1] === 0 && "red") || (minTiles[1] === 0 && "green") || "")}>1</div>
        <div className={"tiles " + ((hourTiles[2] === 0 && minTiles[2] === 0) ? "blue" : (hourTiles[2] === 0 && "red") || (minTiles[2] === 0 && "green") || "")}>2</div>
        <div className={"tiles " + ((hourTiles[3] === 0 && minTiles[3] === 0) ? "blue" : (hourTiles[3] === 0 && "red") || (minTiles[3] === 0 && "green") || "")}>3</div>
        <div className={"tiles " + ((hourTiles[4] === 0 && minTiles[4] === 0) ? "blue" : (hourTiles[4] === 0 && "red") || (minTiles[4] === 0 && "green") || "")}>5</div>
    </div>
}