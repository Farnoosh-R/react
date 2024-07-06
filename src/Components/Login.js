import React, { useEffect, useRef } from "react";




const Login = () => {


    const inputRef = useRef(null);

    useEffect(() => {
       // console.log(inputRef)
       inputRef.current.focus();
    }, [])

    return(
        <div>
        
        <div >
            <input ref={inputRef} type="text" />userName
        </div>
        <div >
        <input type="text" />password
    </div>
    <button >login</button>
        </div>
    );
}

export default Login;