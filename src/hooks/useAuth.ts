import { useNavigate } from "react-router-dom";

export const useUnauthorizedNavigate = () => {
  const navigate = useNavigate();
  const unauthorizedNavigate = () => navigate("/login");
  return unauthorizedNavigate;
};
