"use client";

import { useEffect } from "react";

const RootError = ({ error,reset }) => {
    
    useEffect(()=>{
       console.log(error)
    },[error])

    return (
        <div>
           <h2 className="text-center text-red-500">{error.message || "something worng"}</h2>
           <button onClick={()=>reset()}>Reset</button>
        </div>
    );
};

export default RootError;