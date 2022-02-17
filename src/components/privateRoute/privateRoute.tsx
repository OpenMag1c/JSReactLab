import { FC, ReactElement } from "react";
import { useLocation, Navigate } from "react-router-dom";

interface PrivateRouteProps {
  isAuth: boolean;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ isAuth, children }) => {
  const location = useLocation();
  return isAuth ? (children as ReactElement) : <Navigate to="/" state={{ from: location }} />;
};

export default PrivateRoute;
