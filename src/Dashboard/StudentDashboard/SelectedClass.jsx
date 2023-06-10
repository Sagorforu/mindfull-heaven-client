import { Helmet } from "react-helmet-async";
import PageTitle from "../../Components/PageTitle/PageTitle";

const SelectedClass = () => {
    return (
        <div>
            <Helmet><title>MindFull Heaven | Selected Class</title></Helmet>
            <PageTitle heading={"Selected Class"}></PageTitle>
            this is SelectedClass route             
        </div>
    );
};

export default SelectedClass;