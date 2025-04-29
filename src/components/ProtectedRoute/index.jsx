import config from "@/config";
import { UserContext } from "@/contexts/UserContext";
import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(UserContext);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!user) {
        const path = encodeURIComponent(location.pathname);
        console.log(path);
        return (
            <Navigate
                to={`${config.routes.login}${path ? `?continue=${path}` : ""}`}
            />
        );
    }
    return children;
};

ProtectedRoute.propTypes = {
    children: PropTypes.element,
};

export default ProtectedRoute;
