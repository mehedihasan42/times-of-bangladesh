"use client";

import { useEffect } from "react";

const ProductError = ({ error,reset }) => {
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

export default ProductError;