import React, { useMemo, useState } from "react";

const Memohook = () => {
    const [count, setcount] = useState(0);

    const incc = () => {
        setcount(count + 1);
    };

    const decc = () => {
        if (count != 0) {
            setcount(count - 1);
        };
    }


    const [item, setitem] = useState(0);

    const incit = () => {
        setitem(item + 1);
    };

    const decit = () => {
        if (item != 0) {
            setitem(item - 1);
        };
    }
    
    
    
    
    var test = useMemo(
        function demo() {
            console.log("Hellow !!!!!");
        }, [count, item]
    )

    return (
        <>
            {test}
            <div>
                <h1>Counter </h1>
                <p>Count: {count}</p>
                <button type="button" onClick={incc}>Inc</button>
                <button type="button" on onClick={decc}>Dec</button>
            </div>
            <hr />
            <div>
                <h1> Item Counter </h1>
                <p>Item: {item}</p>
                <button type="button" onClick={incit}>Inc</button>
                <button type="button" on onClick={decit}>Dec</button>
            </div>

        </>
    )
}
export default Memohook