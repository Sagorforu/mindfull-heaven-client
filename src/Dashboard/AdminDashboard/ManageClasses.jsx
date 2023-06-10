import { Helmet } from "react-helmet-async";
import PageTitle from "../../Components/PageTitle/PageTitle";

const ManageClasses = () => {
    return (
        <div>
            <Helmet><title>MindFull Heaven | Manage Classes</title></Helmet>
            <PageTitle heading={"Manage Classes"}></PageTitle>
            this is manage classes dashboard route            
        </div>
    );
};

export default ManageClasses;