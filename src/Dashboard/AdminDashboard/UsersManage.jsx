import { Helmet } from "react-helmet-async";
import PageTitle from "../../Components/PageTitle/PageTitle";
import { useQuery } from "@tanstack/react-query";

const UsersManage = () => {

    const {data: users=[], refetch} = useQuery(["users"], async() => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })

    return (
        <div>
            <Helmet><title>MindFull Heaven | Manage Users</title></Helmet>
            <PageTitle heading={"Manage Users"}></PageTitle> 
            <h1>{users.length}</h1>           
        </div>
    );
};

export default UsersManage;