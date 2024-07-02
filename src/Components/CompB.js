import React from "react";
import { useContext } from "react";
import {UserContext} from "../App";

const CompB = () =>{

    const name = useContext(UserContext);
    return(
        <div>
        <h3>{name}</h3>
        </div>
    )
}

export default CompB;