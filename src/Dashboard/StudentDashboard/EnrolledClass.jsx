import { Helmet } from "react-helmet-async";
import PageTitle from "../../Components/PageTitle/PageTitle";

const EnrolledClass = () => {
    return (
        <div>
            <Helmet><title>MindFull Heaven | Enrolled Class</title></Helmet>
            <PageTitle heading={"Enrolled Class"}></PageTitle>
            this is EnrolledClass            
        </div>
    );
};

export default EnrolledClass;