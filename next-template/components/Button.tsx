/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

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
  // const dispatch = useDispatch();
  const handleButtonClick = () => {
    // dispatch(actionCreators.clickButtonAsync());
  };
  return (
    <div css={buttonCss} onClick={handleButtonClick}>
      Click 📝
    </div>
  );
};

export default Button;
