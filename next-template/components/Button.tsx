/** @jsxImportSource @emotion/react */
import React from "react";
import { useDispatch } from "react-redux";
import { css } from "@emotion/react";
import { actionCreators } from "../store/appSlice";

const buttonCss = css`
  all: unset;
  display: block;
  background-color: #f3e192;
  width: 5rem;
  height: 2rem;
  &:hover {
    background-color: #ebc7c7;
    border: none;
  }
  cursor: pointer;
`;

const Button: React.FC = () => {
  const dispatch = useDispatch();
  const handleButtonClick = () => {
    // dispatch(actionCreatorss.clickButtonAsync());
    dispatch(actionCreators.clickButton());
  };
  return (
    <div css={buttonCss} onClick={handleButtonClick}>
      Click 📝
    </div>
  );
};

export default Button;
