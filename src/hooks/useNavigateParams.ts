import { createSearchParams, useNavigate } from "react-router-dom";

const useNavigateLogin = () => {
  const navigate = useNavigate();
  const param = { login: "login" };
  return (pathname: string) => navigate({ pathname, search: `?${createSearchParams(param)}` });
};

export default useNavigateLogin;
