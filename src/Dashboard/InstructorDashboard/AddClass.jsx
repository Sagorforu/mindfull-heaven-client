import { Helmet } from "react-helmet-async";
import PageTitle from "../../Components/PageTitle/PageTitle";

const AddClass = () => {
    return (
        <div>
            <Helmet><title>MindFull Heaven | Add a Class</title></Helmet>
            <PageTitle heading={"Add a Class"}></PageTitle>
            this is add class route            
        </div>
    );
};

export default AddClass;