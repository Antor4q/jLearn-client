import { Navigate } from "react-router-dom";
import PropTypes from "prop-types"

const PrivateRoute = ({ allowedRoles, children }) => {
    const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/signIn" />;
  }

  const user = JSON.parse(atob(token.split(".")[1]));
  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/" />;
  }

  return children
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    allowedRoles: PropTypes.string,
    children: PropTypes.node
}