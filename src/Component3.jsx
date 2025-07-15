import React, { useContext, useState } from "react";
import Context from "./Context";

const Component3 = () => {
    var demo = useContext (Context)
     return (
        <>
        
            <h1>This is famous car {demo}</h1>
        </>
        
    )
}
export default Component3