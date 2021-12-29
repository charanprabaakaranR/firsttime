import React,{useState} from "react";

const AgeButton = ({updateMethod}) => {
    return (
        <div>
            <button onClick={() => {updateMethod();}}>update Age</button>
        </div>
        
    );
}

export default AgeButton