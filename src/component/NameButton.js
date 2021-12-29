import React,{useState} from "react";

const NameButton = ({updateMethod,updateValue}) => {
    return (
        <div>
            <button onClick={() => {updateMethod(updateValue);}}>update Name</button>
        </div>
        
    );
}

export default NameButton