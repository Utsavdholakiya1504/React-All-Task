import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Fetchdata } from "./Reduxstore2";

const Test2 = () => {
    const { loading, data, error } = useSelector((state) => state)
    var dispatch = useDispatch();

    useEffect = (() => {
        dispatch(Fetchdata)
    }, [])
    return (

        <>

        </>

    )
}

export default Test2