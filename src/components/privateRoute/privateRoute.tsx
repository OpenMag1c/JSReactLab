import { FC } from "react";
import { useLocation, Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const PrivateRoute: FC = () => {
  const { isAuth } = useSelector((state: RootState) => state.auth);
  const location = useLocation();
  return isAuth ? <Outlet /> : <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
