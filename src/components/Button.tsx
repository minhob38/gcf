import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import * as actionCreators from "../reducers/appReducer";
import { IButtonProps } from "../types/types";

const ButtonContainer = styled.div`
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

/**
button component
- click 또는 press 하면 event가 발생합니다.
- hover일때, 색이 바뀝니다.
*/
const Button: React.FC<IButtonProps> = ({ label }) => {
  const dispatch = useDispatch();
  const handleButtonClick = () => {
    dispatch(actionCreators.clickButtonAsync());
  };
  return <ButtonContainer onClick={handleButtonClick}>{label}</ButtonContainer>;
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Button;
