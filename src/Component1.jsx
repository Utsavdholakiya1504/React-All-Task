import React, { useState } from "react";
import Component2 from "./Component2";
import Context from "./Context";

const Component1 = () => {
    var car = "BMW ";
    return (
        <>
            <Context.Provider value={car}>

                <h1>This is famous car {car}</h1>
                <Component2 />

            </Context.Provider>

        </>
    )

}
export default Component1