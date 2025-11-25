import { useState } from "react";

export default function Timer() {
    const [seconds, setSeconds] = useState(0);

    setTimeout(() => {
        setSeconds(seconds + 1) 
    }, 1000);

    return (
        <section>
            <h2>Timer</h2>
            <div>{seconds} seconds</div>
        </section>
    );
}


