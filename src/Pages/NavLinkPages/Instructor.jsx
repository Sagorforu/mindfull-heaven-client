import { useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Instructor = () => {
    
    const [instructor, setInstructor] = useState([]);

    useEffect(()=> {
        fetch("http://localhost:5000/users/instructor")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setInstructor(data)
        })
    },[])
    return (
        <div>
            <Helmet>
                <title>MindFull Heaven | Instructor</title>
            </Helmet>     
            <div>{instructor.length}</div>      
        </div>
    );
};

export default Instructor;