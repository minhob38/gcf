/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import * as colors from "@constants/colors";
import * as fonts from "@constants/fonts";

interface IProps extends IStyleProps {
  title: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

interface IStyleProps {
  width: string;
  height: string;
}

const Wrapper = styled.button`
  all: unset;
  display: block;
  background-color: ${colors.WHITE_1};
  width: ${(props: IStyleProps) => props.width};
  height: ${(props: IStyleProps) => props.height};
  border: 2px solid ${colors.PRIMARY_3};
  border-radius: 8px;
  font: ${fonts.BUTTON_2};
  color: ${colors.BLACK_1};
  text-align: center;
  /* &:hover {
    background-color: #ebc7c7;
    border: none;
  } */
  cursor: pointer;
`;

const Button: React.FC<IProps> = ({ title, width, height, onClick }) => {
  return (
    <Wrapper width={width} height={height} onClick={onClick}>
      {title}
    </Wrapper>
  );
};

export default Button;
