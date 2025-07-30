import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Test = () => {
    const name = useSelector((state) => state.name);
    var dispatch = useDispatch();

    const handleClick = () => {
        dispatch({
            type: "msg"

        })
    }


    return (
        <>
            <h1>{name}</h1>
            <button onClick={handleClick}>Click</button>

        </>
    )
}
export default Test