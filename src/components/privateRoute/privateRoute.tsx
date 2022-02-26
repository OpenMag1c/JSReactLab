import { FC, useEffect, useState } from "react";
import { useLocation, Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { getUser } from "@/api/api";
import useActions from "@/hooks/useActions";
import Spinner from "@/components/elements/spinner/spinner";

const PrivateRoute: FC = () => {
  const { isAuth } = useSelector((state: RootState) => state.auth);
  const [loading, setLoading] = useState<boolean>(true);
  const { signIn } = useActions();
  const location = useLocation();

  useEffect(() => {
    const userId = localStorage.getItem("id");
    if (userId) {
      (async () => {
        const user = await getUser({ id: userId });
        if (user) {
          signIn(user);
        }
        setLoading(false);
      })();
    } else {
      setLoading(false);
    }
  }, [isAuth]);

  if (loading) {
    return <Spinner />;
  }

  return isAuth ? <Outlet /> : <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
