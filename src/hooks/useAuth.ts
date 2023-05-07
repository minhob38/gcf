import { useNavigate } from "react-router-dom";
import { useTypedDispatch } from "./useStore";
import { actions as userActions } from "@store/slices/userSlice";

export const useUnauthorizedNavigate = () => {
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();
  const unauthorizedNavigate = () => {
    dispatch(userActions.unAuthenticate());
    navigate("/login");
  };
  return unauthorizedNavigate;
};
