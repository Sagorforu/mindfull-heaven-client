import { Helmet } from "react-helmet-async";
import PageTitle from "../../Components/PageTitle/PageTitle";

const MyClass = () => {
    return (
        <div>
            <Helmet><title>MindFull Heaven | My Class</title></Helmet>
            <PageTitle heading={"My Class"}></PageTitle>
            this is my class route             
        </div>
    );
};

export default MyClass;