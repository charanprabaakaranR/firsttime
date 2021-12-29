import React,{useState} from "react";
import InputName from "./InputName";

const Details = () => {
    const [name,setName] = useState();
    const [age,setAge] = useState(10);
    const [gender,setGender] = useState();
    const [dob,setDob] = useState();

    const nameCallback = (value) =>{
        console.log(value);
        setName(value);
    };
    const ageCallback = () =>{
        setAge(age+1);
    };
    return (
        <div>
            <h2>Name :{name} </h2>
            <h2>Age :{age} </h2>
            <h2>Gender :{gender}</h2>
            <h2>DOB :{dob}</h2>
            <InputName updateName={nameCallback} updateAge={ageCallback}></InputName>
        </div>
        
    );
}

export default Details