import React,{useState} from "react";
import NameButton from "./NameButton";
import AgeButton from "./AgeButton";

const InputName = ({updateName,updateAge}) => {
    const [name] = useState("tida");
    return (
        <div>
            <h2>Name to be updated :{name}</h2>
            <NameButton updateMethod = {updateName} updateValue = {name}></NameButton>
            <AgeButton updateMethod = {updateAge}></AgeButton>
        </div>
        
    );
}

export default InputName