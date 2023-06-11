import { useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Classes = () => {
    const [approveClasses, setApproveClasses] = useState([]);

    useEffect(()=> {
        fetch("http://localhost:5000/approveClasses")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setApproveClasses(data)
        })
    },[])

    return (
        <div>
            <Helmet>
                <title>MindFull Heaven | Classes</title>
            </Helmet>        
            <div>{approveClasses.length}</div>  
        </div>
    );
};

export default Classes;