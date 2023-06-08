import { ImSpinner3 } from "react-icons/im";
import useAuth from "../Components/Hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const { user, loading} = useAuth();
    const location = useLocation();

    if (loading) {
        return <div className="flex items-center justify-center">
            <ImSpinner3 size={40} className="animate-spin"></ImSpinner3>
        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate to='login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;