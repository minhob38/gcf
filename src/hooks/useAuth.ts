import { useNavigate } from "react-router-dom";
import { useTypedDispatch } from "./useStore";
import { actions as userActions } from "@store/slices/userSlice";
import { useEffect } from "react";

export const useUnauthorizedNavigate = () => {
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();
  const unauthorizedNavigate = () => {
    dispatch(userActions.unAuthenticate());
    navigate("/login");
  };
  return unauthorizedNavigate;
};

export const useInitialAuthentication = () => {
  useEffect(() => {}, []);
};
