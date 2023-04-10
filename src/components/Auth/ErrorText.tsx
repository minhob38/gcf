/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import * as fonts from "@constants/fonts";
import * as colors from "@constants/colors";

interface IProps {
  text: string | null;
}

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  font: ${fonts.FONT_SMALL_400};
  color: ${colors.ERROR_RED};
`;

const ErrorText: React.FC<IProps> = ({ text }) => {
  return <Text>{text}</Text>;
};

export default ErrorText;
