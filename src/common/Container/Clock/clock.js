import { useEffect, useState } from "react"
import { DateView } from "./styledclock"

export const Clock = () => {
    const [date, setDate] = useState (new Date());

    useEffect (() => {
        const intervalId = setInterval (() => {
            setDate(new Date());
        },1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);


    return (
    <DateView>
        <div>{date.toLocaleString("en-US", { weekday: "long", day: "numeric", month: "numeric", year: "numeric", hour:"2-digit", minute:"2-digit", second:"2-digit" })} </div>
    </DateView>


    );
};