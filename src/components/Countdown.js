import React, { useEffect, useState } from "react";
import './Countdown.css'

const Countdown = ({ deadline }) => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const leading0 = (num) => {
        return num < 10 ? "0" + num : num;
    };

    const getTimeUntil = (deadline) => {
        const time = Date.parse(deadline) - Date.parse(new Date());
        if (time < 0) {
            setDays(0);
            setHours(0);
            setMinutes(0);
            setSeconds(0);
        } else {
            setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
            setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
            setMinutes(Math.floor((time / 1000 / 60) % 60));
            setSeconds(Math.floor((time / 1000) % 60));
        }
    };

    useEffect(() => {
        setInterval(() => getTimeUntil(deadline), 1000);

        return () => getTimeUntil(deadline);
    }, [deadline]);

    return (
        <div>
            <div className="Countdown">{leading0(days)}<span className="CountdownChar">D</span> : {leading0(hours)}<span className="CountdownChar">H</span> : {leading0(minutes)}<span className="CountdownChar">M</span> : {leading0(seconds)}<span className="CountdownChar">S</span></div>
        </div>
    );
};

export default Countdown;